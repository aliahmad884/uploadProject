<?php
$zip = new ZipArchive;
$res = $zip->open('deployment/next.zip');
if ($res === TRUE) {
  $zip->extractTo('/');
  $zip->close();
  echo 'Unzipped successfully!';
} else {
  echo 'Failed to unzip.';
}
?>
