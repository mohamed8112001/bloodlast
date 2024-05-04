//  document.addEventListener('DOMContentLoaded', function () {
//       const deleteButtons = document.querySelectorAll('.delete-btn');

//       deleteButtons.forEach(function (button) {
//         button.addEventListener('click', function () {
//           const post = this.closest('.mainPost');
//           post.remove();
//         });
//       });
//     });
  // Function to remove the specified elements
//   function removeElements() {
//     var parent = document.querySelector('.donor-post');
//     var post = document.querySelector('.mainPost');
    // var postHeader = document.querySelector('.post-actions');
    // var child1 = document.querySelector('p');
    // var child2 = document.getElementById('show');

    // post.remove();

    // parent.removeChild(post);
    // parent.removeChild(postHeader);
    // parent.removeChild(child1);
    // parent.removeChild(child2);
//     console.log("sssssssssdds");
// }

// Add event listener to the button

// document.getElementById('btn-1').addEventListener('click', removeElements);

 document.addEventListener('DOMContentLoaded', function () {
      const deleteButtons = document.querySelectorAll('.delete-btn');

      deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          const post = this.closest('.mainPost');
          post.remove();
        });
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const deleteButtons = document.querySelectorAll('.btn1');
  
        deleteButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            const col = this.closest('.column');
            col.remove();
          });
        });
      });

      document.addEventListener('DOMContentLoaded', function () {
        const deleteButtons = document.querySelectorAll('.del-all');
  
        deleteButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            const hh = this.closest('.hhh');
            hh.remove();
            console.log("sshshshh")
          });
        });
      });