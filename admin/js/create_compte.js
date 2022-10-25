
function upload(){
    //get your image
    var image=document.getElementById('image').files[0];
    //get your blog text
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var name =document.getElementById('name').value;
    var phone=document.getElementById('phone').value;
    var type=document.getElementById('type').value;
    var designation=document.getElementById('designation').value;
    var rccm=document.getElementById('rccm');
    var nui =document.getElementById('nui');
    var isActive="false";
    var date = Date.now();  
    // console.log(date);
    
    //get image name
    var imageName=image.name;
    //firebase storage reference
    //it is the path where your image will be stored
    var storageRef=firebase.storage().ref('images/'+imageName);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref('Souscription/').push().set({
                 email:email,
                 name:name,
                 type:type,
                 phone:phone,
                 nui:nui,
                 rccm:rccm,
                 designation:designation,
                 password:password,
                 isActive:isActive,
                 imageURL:downloadURL,
                 date:date
           },function(error){
               if(error){
                //    alert("Error while uploading");
                swal({
                    title: "youuuuuu!",
                    text: "You clicked the button!",
                    icon: "error",
                    button: "OK!",
                  });
               }else{
               
                //    alert("Successfully uploaded");
                swal({
                    title: "Abonnement ajouté avec success!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "OK!",
                  });
                   //now reset your form
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}

window.onload=function(){
    this.getdata();
}



function delete_post(key){
    firebase.database().ref('blogs/'+key).remove();
    getdata();

}