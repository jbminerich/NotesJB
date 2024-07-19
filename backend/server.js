const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Replace <raspberry_pi_ip_address> with your Raspberry Pi's IP address
mongoose.connect('mongodb://192.168.0.156:27017/notes', { useNewUrlParser: true, useUnifiedTopology: true });

const NoteSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const Note = mongoose.model('Note', NoteSchema);

app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
});

app.post('/notes', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        content: req.body.content,
    });
    await note.save();
    res.send(note);
});

app.delete('/notes/:id', async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) return res.status(404).send();
        res.send(note);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});