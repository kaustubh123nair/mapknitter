class Reaction {
  function changeReactionCount(value, imageId) {
    $('#reaction-count-' + imageId).html(value);
  }

  function changeToReacted(imageId) {
    $("#reaction-star-" + imageId)[0].className = "fa fa-star-o";
  }

  function changeToUnreacted(imageId) {
    $("#reaction-star-" + imageId)[0].className = "fa fa-star";
  }

  function reactOnImage(event) {
      var imageId = event.data.imageId;
    $.getJSON("/warpables/" + imageId + "/react",
      {
        "reaction_type": "like"
      })
     .done(function(response) {
        changeReactionCount(parseInt(response), imageId);
        changeToUnreacted(imageId);
        $("#reaction-button-" + imageId ).off();
        $("#reaction-button-" + imageId ).on('click',{imageId: imageId},unreactOnImage );
     });

  }

  function unreactOnImage(event) {
    var imageId = event.data.imageId;
    $.getJSON("/warpables/" + imageId + "/unreact")
    .done(function(response) {
      changeReactionCount(parseInt(response), imageId);
      changeToReacted(imageId);
      $("#reaction-button-" + imageId ).off();
      $("#reaction-button-" + imageId ).on('click',{imageId: imageId},reactOnImage );
    });

  }
}
