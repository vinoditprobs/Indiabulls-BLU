<?php
$title = 'Inquire | Indiabulls BLU';
$bodyclass = 'homepage';
$MetaTitle = 'Sparkt';
$Metadescription = 'Sparkt';
$MetaImage = '';
$MetaUrl = '';
include( "header.php" );
?>
<main>
  <div class="section_title_component"  >
    <div class="section_title" data-section_title="title1" >
      <h1><span>Register</span></h1>
    </div>
  </div>
  <div id="IndiabullsBLU">
    <div class="section_component title_component" data-section_title="title1" >
      <div class="content_component" >
        <div class="content_background grid_area_img_left " >
          <div class="bg_image " style="background-image: url('images/estate/slide1.jpg')" ></div>
        </div>
        <div class="content_area center middle grid_area_right " >
          <div class="content" >
            <div class="card_img mb-4" style="background-image: url('images/estate/slide1.jpg')" ></div>
            <article class="section_details fadein text_center " >
              <h3 class="mb-2" >Interested in Blu?</h3>
              <p>Fill in your details and we'll get in touch.</p>
            </article>
            <div class="form" >
              <form>
                <div class="input_field" >
                  <div class="input" >
                    <input type="text" placeholder="Full Name">
                  </div>
                </div>
                <div class="input_field width50" >
                  <div class="input" >
                    <input type="text" placeholder="Email">
                  </div>
                </div>
                <div class="input_field width50" >
                  <div class="input" >
                    <input type="text" placeholder="Phone">
                  </div>
                </div>
                <div class="input_field width50" >
                  <div class="input" >
                    <input type="text" placeholder="City">
                  </div>
                </div>
                <div class="input_field width50" >
                  <div class="input" >
                    <input type="text" placeholder="State / Province">
                  </div>
                </div>
                <div class="input_field " >
                  <div class="input select" >
                    <select>
                      <option selected disabled >Country</option>
                      <option>India</option>
                      <option>United States</option>
                    </select>
                  </div>
                </div>
                <div class="input_field" >
                  <div class="input select" >
                    <select>
                      <option selected disabled >Are you a Broker</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div class="input_field" >
                  <div class="input select" >
                    <select name="preferred_residence">
                      <option value="">Preferred Residence</option>
                      <option value="2 Bedroom:$6.5M - $10M">2 Bedrooms — $6.5M to $10M</option>
                      <option value="3 Bedroom:$9.5M - $26M">3 Bedrooms — $9.5M to $26M</option>
                      <option value="4 Bedroom:$32M - $41.5M">4 Bedrooms — $32M to $41.5M</option>
                      <option value="5 Bedroom:$62M - $78M">5 Bedrooms — $62M to $78M</option>
                      <option value="6+ Bedroom:$100M+">6+ Bedrooms — $100M+</option>
                    </select>
                  </div>
                </div>
                <div class="input_field mb-3" >
                  <div class="input" >
                    <input type="text" placeholder="Comments (Optional)">
                  </div>
                </div>
                <div class="input_field center" >
                  <button class="btn dark submit" ><span class="btn_text" >Send</span><span class="arrow small right"></span></button>
                </div>
              </form>
            </div>
            <!--    <article  class="section_details fadein text_center " >
              <h4>For sales Lorem Ipsum</h4>
              <p>For press inquiries, Lorem Ipsum</p>
            </article>--> 
          </div>
        </div>
      </div>
    </div>
    <div class="footer_band fixed" >
      <nav><a href="legal.php">Legal</a> <a href="disclaimer.php">Disclaimer</a> <a href="sitemap.php">Sitemap</a> <span>Copyright Notice</span></nav>
    </div>
  </div>
</main>
<?php include("footer.php"); ?>
