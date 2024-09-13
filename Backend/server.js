const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const { PassThrough } = require('stream');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory storage for demonstration (use a database in production)
const feedbackList = [];

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Function to generate a PDF and return as a stream
const generatePdf = (feedback) => {
    const doc = new PDFDocument();
    const stream = new PassThrough();

    doc.pipe(stream);

    doc.fontSize(18).text('Feedback Invoice', { align: 'center' });
    doc.moveDown();

    doc.fontSize(14).text(`Name: ${feedback.name}`);
    doc.text(`Email: ${feedback.email}`);
    doc.text(`Subject: ${feedback.subject}`);
    doc.text(`Rating: ${feedback.rating}`);
    doc.text(`Message: ${feedback.message}`);

    doc.end();

    return stream;
};

// POST method to submit feedback
app.post('/api/feedback', (req, res) => {
    const { name, email, subject, message, rating } = req.body;

    // Store feedback in memory (you might want to save this to a database in production)
    feedbackList.push({ name, email, subject, message, rating });

    // Create PDF
    const pdfStream = generatePdf({ name, email, subject, message, rating });

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Feedback from ${name} - ${subject}`,
        text: 'Please find the attached feedback PDF.',
        attachments: [{
            filename: `Feedback_${name}.pdf`,
            content: pdfStream,
            encoding: 'base64'
        }]
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error submitting feedback. Please try again.');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Thank you for your feedback!');
        }
    });
});

// GET method to retrieve feedback
app.get('/api/feedback', (req, res) => {
    res.json(feedbackList);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});