# Pixelated Portfolio

A retro-aesthetic personal portfolio website built with pure HTML, CSS, and
JavaScript. Features a pixel art style with interactive animations and a fully
responsive design.

## 🎨 Features

- **Retro Pixel Aesthetic**: Custom Pixeboy font and retro color scheme (dark
  backgrounds with yellow accents)
- **Loading Animation**: Smooth animated loading screen on page load
- **Responsive Design**: Fully responsive layout with mobile-first approach
- **Mobile Navigation**: Hamburger menu that converts to sidebar on smaller
  screens
- **Skill Meters**: Interactive circular and progress bar skill visualizations
- **Project Showcase**: Display of completed projects with links to GitHub
  repositories
- **Services Section**: Carousel of services with navigation buttons
- **Smooth Animations**: Various scroll-triggered animations and transitions

## 🛠 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Flexbox, Grid, Conic gradients, Media queries
- **JavaScript**: DOM manipulation, animations
- **Custom Font**: Pixeboy-z8XGD font for retro appearance

## 📁 Project Structure

```
Pixelated-Portfolio/
├── index.html              # Main HTML file
├── style.css               # All styling and responsive rules
├── script.js               # JavaScript functionality
├── README.md              # This file
├── images/
│   ├── porjectImages/     # Project showcase images
│   ├── serviceScreenImages/ # Service carousel images
│   └── *.png              # UI icons and assets
├── pixeboy-font/
│   └── Pixeboy-z8XGD.ttf # Custom retro font
└── loadingBot.svg         # Loading animation SVG
```

## 📋 Page Sections

### 1. **My Intro**

- Profile image (animated GIF)
- Name and field description
- Social media links (Twitter, GitHub, LinkedIn, Facebook)
- Skills box wrapper

### 2. **Programming Languages**

- Circular skill meters showing proficiency
- Languages: HTML (95%), CSS (80%), JavaScript (90%), Go Lang (60%), C++ (55%),
  Lua (70%)

### 3. **Frameworks, Libraries & Tools**

- Progress bar visualizations
- Tools: NextJs, Expo, Fyne Go, React, NeoVim, VS Code, Linux, Bash, Love 2D

### 4. **Projects**

- Showcase of 4 major projects:
  - **HTML Render Bot**: Discord bot for rendering HTML/CSS
  - **Remote Computer Monitor**: Windows monitoring software built with Go
  - **Panda Police Extension**: Browser extension for blocking websites
  - **Neo Vim Plugins**: Lua-based editor plugins

### 5. **Services**

- Interactive carousel showing services offered
- Includes: Workflow automation, responsive web development, crypto payments
- Navigation buttons to cycle through services


## 🎯 Key Features Explained

### Responsive Navbar

- **Desktop (≥700px)**: Traditional horizontal navigation bar
- **Mobile (<700px)**: Hamburger menu that slides in a sidebar

### Skill Animations

- Circular meters animate on page load
- Progress bars fill up when Framework section comes into view
- Real-time percentage counter


## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- For email functionality: Configure SMTP.js with your email service

### Installation

1. Clone the repository:

```bash
git clone https://github.com/HarshGaur387R/Pixelated-Portfolio.git
```

2. Navigate to the project directory:

```bash
cd Pixelated-Portfolio
```

3. Open `index.html` in your web browser:

```bash
open index.html
# or
start index.html
```

## 📱 Responsive Breakpoints

- **≥1200px**: Full desktop layout
- **768px - 1200px**: Tablet layout (720px content width)
- **700px - 768px**: Medium mobile (600px content width)
- **460px - 700px**: Mobile (400px content width)
- **<460px**: Small mobile (310px content width)

## 🎮 Interactions

- **Navigation Links**: Smooth scroll to sections
- **Project Cards**: Click to open GitHub repositories
- **Service Buttons**: Navigate through services carousel
- **Hover Effects**: All interactive elements have visual feedback
- **Form Submission**: Validates input and sends email

## 🎨 Color Scheme

- **Background**: `rgb(48, 45, 45)` - Dark charcoal
- **Primary Text**: Yellow (`#FFFF00`)
- **Accent**: `rgb(255, 255, 165)` - Light yellow
- **UI Elements**: Various grays for retro effect

## 📝 Customization

### Modify Skills

Update the CSS custom properties in `style.css`:

```css
:root {
    --hpos: 95%; /* HTML percentage */
    --cpos: 80%; /* CSS percentage */
    --jpos: 90%; /* JavaScript percentage */
    /* ... more skills */
}
```

### Add Projects

Edit the `projectsLink` array in `script.js` and add new project cards to
`index.html`.

### Update Services

Modify the `imageElements` and `serviceDescription` arrays in `script.js`.

## 🔗 Links

- **Author**: [Harsh Gaur](https://github.com/HarshGaur387R)
- **Twitter**: [@hgaur701](https://twitter.com/hgaur701)
- **LinkedIn**: [harsh-gaur](https://www.linkedin.com/in/harsh-gaur-a0b525217/)
- **GitHub**: [@HarshGaur387R](https://github.com/HarshGaur387R)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Notes

- All animations are CSS and JavaScript-based for performance
- The website loads with a custom animated loading screen
- CAPTCHA is implemented using HTML5 Canvas
- No external UI frameworks used - everything is custom CSS

---

**Version**: 1.0.0\
**Last Updated**: 2026-06-06
