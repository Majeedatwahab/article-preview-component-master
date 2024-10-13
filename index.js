document.addEventListener("DOMContentLoaded", ()=>{
  const shareBtn = document.getElementById('share-btn');
  const activeState = document.getElementById('active');
  const shareButton =document.getElementById('share-button');

  shareBtn.addEventListener('click', () => {
    activeState.classList.toggle('active-state');
  });

  shareButton.addEventListener('click', () => {
    activeState.classList.toggle('active-state');
  });
})