/* Existing JavaScript code... */

function handleEditBtnClick(event) {
    const postTitle = event.target.parentNode.querySelector('.post-title');
    const postText = event.target.parentNode.parentNode.querySelector('.post-content p');
  
    postTitle.contentEditable = true;
    postText.contentEditable = true;
  
    postTitle.classList.add('editable');
    postText.classList.add('editable');
  
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.innerHTML = '<i class="fas fa-save"></i> Save';
  
    event.target.parentNode.replaceChild(saveBtn, event.target);
    saveBtn.addEventListener('click', handleSaveBtnClick);
  }
  
  function handleSaveBtnClick(event) {
    const postTitle = event.target.parentNode.querySelector('.post-title');
    const postText = event.target.parentNode.parentNode.querySelector('.post-content p');
  
    postTitle.contentEditable = false;
    postText.contentEditable = false;
  
    postTitle.classList.remove('editable');
    postText.classList.remove('editable');
  
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
  
    event.target.parentNode.replaceChild(editBtn, event.target);
    editBtn.addEventListener('click', handleEditBtnClick);
  }
  
  const editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener('click', handleEditBtnClick);
  });
  