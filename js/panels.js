document.querySelectorAll('.panel-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = document.getElementById(btn.dataset.target);
    panel.classList.toggle('collapsed');
    btn.textContent = panel.classList.contains('collapsed') ? '▸' : '▾';
  });
});
