<?php
$zip = new ZipArchive;
$res = $zip->open('next.zip');
if ($res === TRUE) {
  $zip->extractTo('/');
  $zip->close();
  echo 'Unzipped successfully!<br>';
  
  // List the contents of the directory
  $dir = '/'; // Root directory
  if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
      echo "<h3>Contents of $dir:</h3>";
      echo "<ul>";
      while (($file = readdir($dh)) !== false) {
        echo "<li>" . htmlspecialchars($file) . "</li>";
      }
      echo "</ul>";
      closedir($dh);
    } else {
      echo 'Failed to open directory.';
    }
  } else {
    echo 'Not a valid directory.';
  }
} else {
  echo 'Failed to unzip.';
}
?>
