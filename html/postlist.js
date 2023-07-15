// const deleteIcons = document.querySelectorAll('.delete-icon');
// const deletePostModal = document.getElementById('delete-post-modal');
// const closeModalBtn = deletePostModal.querySelector('.close');
// const cancelBtn = deletePostModal.querySelector('.cancel-btn');
// const confirmBtn = deletePostModal.querySelector('.confirm-btn');


// function handleDeleteIconClick() {
//     deletePostModal.style.display = 'block';
  
// }


// function closeDeletePostModal() {
//     deletePostModal.style.display = 'none';
    
// }


// function handleCancelBtnClick() {
//     closeDeletePostModal();
// }


// function handleConfirmBtnClick() {
//     const post = this.closest('.post');
//     post.remove();
//     closeDeletePostModal();
// }

// deleteIcons.forEach((deleteIcon) => {
//     deleteIcon.addEventListener('click', handleDeleteIconClick);
// });


// closeModalBtn.addEventListener('click', closeDeletePostModal);


// cancelBtn.addEventListener('click', handleCancelBtnClick);


// confirmBtn.addEventListener('click', handleConfirmBtnClick);

// const deleteIcons = document.querySelectorAll('.delete-icon');
// const deletePostModal = document.getElementById('delete-post-modal');
// const closeModalBtn = deletePostModal.querySelector('.close');
// const cancelBtn = deletePostModal.querySelector('.cancel-btn');
// const confirmBtn = deletePostModal.querySelector('.confirm-btn');

// function handleDeleteIconClick() {
//   deletePostModal.style.display = 'block';
// }

// function closeDeletePostModal() {
//   deletePostModal.style.display = 'none';
// }

// function handleCancelBtnClick() {
//   closeDeletePostModal();
// }

// function handleConfirmBtnClick() {
//   const post = this.closest('.post');
//   post.remove();
//   closeDeletePostModal();
// }

// deleteIcons.forEach((deleteIcon) => {
//   deleteIcon.addEventListener('click', handleDeleteIconClick);
// });

// closeModalBtn.addEventListener('click', closeDeletePostModal);

// cancelBtn.addEventListener('click', handleCancelBtnClick);

// confirmBtn.addEventListener('click', handleConfirmBtnClick);


const deleteIcons = document.querySelectorAll('.delete-icon');
const deletePostModal = document.getElementById('delete-post-modal');
const closeModalBtn = deletePostModal.querySelector('.close');
const cancelBtn = deletePostModal.querySelector('.cancel-btn');
const confirmBtn = deletePostModal.querySelector('.confirm-btn');
const module = document.querySelector('.module');

function handleDeleteIconClick() {
  deletePostModal.style.display = 'block';
  module.style.display = 'block';
}

function closeDeletePostModal() {
  deletePostModal.style.display = 'none';
  module.style.display = 'none';
}

function handleCancelBtnClick() {
  closeDeletePostModal();
}

function handleConfirmBtnClick() {
  const post = this.closest('.post');
  post.remove();
  closeDeletePostModal();
}

deleteIcons.forEach((deleteIcon) => {
  deleteIcon.addEventListener('click', handleDeleteIconClick);
});

closeModalBtn.addEventListener('click', closeDeletePostModal);

cancelBtn.addEventListener('click', handleCancelBtnClick);

confirmBtn.addEventListener('click', handleConfirmBtnClick);

module.addEventListener('click', (event) => {
  if (event.target === module) {
    closeDeletePostModal();
  }
});
