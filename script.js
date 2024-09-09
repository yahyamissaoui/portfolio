// Example of simple interactivity: Hide/Show projects section
document.addEventListener('DOMContentLoaded', function () {
    const projectSection = document.getElementById('projects');
    const toggleButton = document.createElement('button');
    
    toggleButton.textContent = 'Toggle Projects Section';
    projectSection.appendChild(toggleButton);
    
    toggleButton.addEventListener('click', function () {
        if (projectSection.style.display === 'none') {
            projectSection.style.display = 'block';
        } else {
            projectSection.style.display = 'none';
        }
    });
});
