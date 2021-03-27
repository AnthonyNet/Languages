<?php include "header.php" ?>
</header>

<body>

<section class=" container">
		

	




	
		<section class="words-section">
			
			<?php include "data/data_nemcina.php";
			

				$sort_by_25 = array_chunk($data_nemcina, 25, true);
			/*
				echo "<pre>";
				print_r($sort_by_25);
				echo "</pre>";
			*/
				$i_sort_by_25 = 1;
				echo '<ul class="choose_words_section">';
				echo '<li class="selected"><a href="#">All</a></li>';
				for($i = 1; $i <= count($sort_by_25); $i++){
					//echo '<li><a href="anglictina_slova">' . $i . '</a></li>';
				echo '<li><a href=' . "#anglictina_slova{$i}" . '>' . $i . '</a></li>';
				}
				echo '</ul>';


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


			?>
			
		</section>
            </body>
        <?php include "footer.php"?>