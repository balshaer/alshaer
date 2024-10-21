import mongoose from 'mongoose';

const themeColorSchema = new mongoose.Schema({
  mode: {
    type: String,
    enum: ['Dark', 'Light'],
    required: true,
  },
  colors: {
    background: String,
    headline: String,
    paragraph: String,
    border: String,
    button: String,
    scroll: String,
    buttonBorder: String,
    buttonHover: String,
    buttonText: String,
    buttonTextHover: String,
    cardBackground: String,
    cardHeadline: String,
    cardParagraph: String,
    linkColor: String,
    linkHover: String,
    logoBackground: String,
    logoTextColor: String,
    // Add more fields as needed
  },
});

export default mongoose.model('ThemeColor', themeColorSchema);
