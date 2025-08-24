<?php
// Simple redirect to HTML file
// This ensures the site works even if the server is configured to look for PHP files first
header('Location: index.html', true, 301);
exit();
?>
