<?php 
	$page_name = basename($_SERVER['SCRIPT_NAME'], '.php');
	if( $page_name == 'index') $page_name = 'home';
?>

<!DOCTYPE html>
<html>
<head>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TERCJEHVZ7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TERCJEHVZ7');
</script>


<meta charset="utf-8">
<title>Brainzone</title>

<meta content="width=device-width, initial-scale=1" name="viewport" />

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;1,300;1,400&display=swap" rel="stylesheet">


<link rel="stylesheet" href="css/style.css">
</head>


<header>

<nav class="nav">
  <ul class="nav-list">
	  
		<?php 
			$pages = glob('*.php');
			
			$pages = array_reverse($pages);

			foreach( $pages as $file) {
				$page = basename($file, '.php');
				if( $page == 'index') $page = 'home';

				if($page_name == $page) echo '<li><strong>'.ucfirst($page) .'</strong></li>';
				else echo '<li><a href="'. $file . '">'. ucfirst($page) .'</a></li>';
				
			}
		?>
 </ul>
</nav>

<!-- 
	OLD NAV
	<nav class="nav">
  <ul class="nav-list">
  <li><a href="index.php">Hlavní stránka</a></li>
    <li><a href="anglictina.php">Angličtina</a></li>
	<li><a href="aj-irregular.php">AJ-Irregular verbs</a></li>
    <li><a href="nemcina.php">Němčina</a></li>
  </ul>
</nav>
-->

	<!-- 
			Back to top 
		-->

		<div class="go-top">
		
			<p class="go-top-text">Back To Top</p>
		</div>
