<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./video.css">
    <title>Document</title>
</head>
<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />

    <table class="table">
      <thead>
        <tr>
          <th>Model shoot video</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>
            <div class="hidden">
              <ul>
                <video width="320" height="240" controls>
                    <source src="../vedeo/1.mp4" type="video/mp4">
              </ul>
            </div>
            <button class="btn btn-primary" data-toggle="modal" data-target="#myModal"> <img src="../img/001.jpg" alt=""> </button>
          </td>
        </tr>
        <tr>
       
          <td>
            <div class="hidden">
              <ul>
                <video width="320" height="240" controls>
                    <source src="../vedeo/3.mp4" type="video/mp4">
              </ul>
            </div>
            <button class="btn btn-primary" data-toggle="modal" data-target="#myModal"> <img src="../img/005.jpg" alt=""> </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Header-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
              <span class="sr-only">Close</span>
            </button>
            <!-- <h4 class="modal-title" id="myModalLabel"></h4> -->
          </div>
          <!-- Body -->
          <div class="modal-body"></div>
          <!-- Footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>


    <script src="./video.js"></script>
</body>
</html>