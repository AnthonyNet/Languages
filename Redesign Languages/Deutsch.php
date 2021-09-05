<?php include "partials/header.php" ?>
</header>

<body>

<section class=" container">
		

	




	
		<section class="words-section">
		
		<div class="menu-words-btn">
			<h3>Zobraz nabídku</h3>
			</div>

			<?php include "data/data_nemcina.php";
			

				$sort_by_25 = array_chunk($data_nemcina, 25, true);
			/*
				echo "<pre>";
				print_r($sort_by_25);
				echo "</pre>";
			*/
				$i_sort_by_25 = 1;
				echo '<ul class="choose_words_section">';
				echo '<li id="vsecko" class="selected"><a href="#">All</a></li>';
				echo '<li id ="random"><a href="#">Náhodně</a></li>';
				for($i = 1; $i <= count($sort_by_25); $i++){
					//echo '<li><a href="anglictina_slova">' . $i . '</a></li>';
				echo '<li><a href=' . "#anglictina_slova{$i}" . '>' . $i . '</a></li>';
				}
				echo '</ul>';

				echo '<div id="container">';
				foreach ($sort_by_25 as $sorted){
					echo '<div class=cover_25_words id=' . 'anglictina_slova' . $i_sort_by_25 . '>';
					echo '<h1 class="h1_words"> Words nr.' . $i_sort_by_25 . '</h1>';
					$i_sort_by_25++;
					foreach ($sorted as $ger => $cze) {
						echo '<div class="words_cover">';
						echo '<dt><a href="#">' . str_replace("*", "'", $cze) . '</a></dt>';
						echo "<dd>" . str_replace("*", "'", $ger) . "</dd>";
						echo '</div>';
					}
					echo '</div>';
				}
				echo '</div>';

			?>
			
		</section>
            </body>
        <?php include "partials/footer.php"?>