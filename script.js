document.addEventListener('DOMContentLoaded', function () {
    const projectSection = document.getElementById('projects');
    const toggleButton = document.getElementById('toggle-projects');
    
    toggleButton.addEventListener('click', function () {
        if (projectSection.style.display === 'none' || projectSection.style.display === '') {
            projectSection.style.display = 'block';
        } else {
            projectSection.style.display = 'none';
        }
    });
});
