function handleEditBtnClick(event) {
  const postTitle = event.target.parentNode.parentNode.querySelector('.post-title p');
  const postText = event.target.parentNode.parentNode.querySelector('.post-data');

  postTitle.contentEditable = 'true';
  postText.contentEditable = 'true';

  postTitle.classList.add('editable');
  postText.classList.add('editable');

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('save-btn');
  saveBtn.innerHTML = '<i class="fas fa-save"></i> Save';

  event.target.parentNode.replaceChild(saveBtn, event.target);
  saveBtn.addEventListener('click', handleSaveBtnClick);
}

function handleSaveBtnClick(event) {
  const postTitle = event.target.parentNode.parentNode.querySelector('.post-title p');
  const postText = event.target.parentNode.parentNode.querySelector('.post-data');
  console.log("postText:-",postText)
  console.log("postTitle:-",postTitle);
  postTitle.contentEditable = 'false';
  postText.contentEditable = 'false';

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

const likeBtn = document.querySelector('.like-btn');
const likeInfo = document.querySelector('.like-info');

let likeCount = 0;

likeBtn.addEventListener('click', handleLikeBtnClick);

function handleLikeBtnClick() {
  likeBtn.classList.toggle('liked');
  if (likeBtn.classList.contains('liked')) {
    likeCount++;
    if (likeCount === 1) {
      likeInfo.textContent = '1 person likes this!';
    } else {
      likeInfo.textContent = `${likeCount} people like this!`;
    }
    likeBtn.textContent = `Liked!`;
  } else {
    likeCount--;
    if (likeCount === 0) {
      likeInfo.textContent = 'Be the first one to like this!';
    } else if (likeCount === 1) {
      likeInfo.textContent = '1 person likes this!';
    } else {
      likeInfo.textContent = `${likeCount} people like this!`;
    }
    likeBtn.textContent = `Like`;
  }
}


function handleCommentBtnClick(event) {
  const commentInput = event.target.parentNode.querySelector('input[type="text"]');
  const comment = commentInput.value.trim();

  if (comment !== '') {
    const commentSection = document.querySelector('.all-comments');

    if (commentSection) {
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.textContent = comment;

      // Insert new comment at the top of the comment section
      commentSection.insertBefore(newComment, commentSection.firstChild);

      // Clear the comment input field
      commentInput.value = '';
    } else {
      console.log("Comment section not found");
    }
  }
}

const commentBtn = document.querySelector('.comment-btn');
commentBtn.addEventListener('click', handleCommentBtnClick);




