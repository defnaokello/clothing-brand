import shirt1 from '../assets/shirt1.jpg';
import shirt2 from '../assets/shirt2.jpg';
import shirt3 from '../assets/shirt3.jpg';
import shirt4 from '../assets/shirt4.jpg';
import shirt6 from '../assets/shirt6.jpg';
import shirt7 from '../assets/shirt7.jpg';
import shirt8 from '../assets/shirt8.jpg';
import shirt9 from '../assets/shirt9.jpg';
import harborHover from '../assets/shirt1.1.jpg';
import monarchHover from '../assets/shirt1.2.jpg';
import cascadeHover from '../assets/shirt1.3.png';
import asterHover from '../assets/shirt1.4.png';
import northlineHover from '../assets/shirt1.5.jpg';
import marlowHover from '../assets/shirt1.6.webp';
import ridgeHover from '../assets/shirt1.7.jpg';
import driftHover from '../assets/shirt1.8.webp';
import driftAltHover from '../assets/shirt1.9.jpg';
import cascadeAltHover from '../assets/shirt1.1.1.jpg';
import asterAltHover from '../assets/shirt1.1.2.jpg';
import knitwear1 from '../assets/knitwear1.jpg';
import knitwear2 from '../assets/knitwear2.jpg';
import knitwear3 from '../assets/knitwear3.jpg';
import knitwear4 from '../assets/knitwear4.jpg';
import knitwear5 from '../assets/knitwear5.jpg';
import knitwear6 from '../assets/knitwear6.jpg';
import knitwear7 from '../assets/knitwear7.jpg';
import knitwear8 from '../assets/knitwear8.jpg';
import knitwear9 from '../assets/knitwear9.jpg';
import knitwear10 from '../assets/knitwear10.jpg';
import trouserCargoBlue from '../assets/trouser1.1.webp';
import trouserPatchworkGray from '../assets/trouser1.2.jpg';
import trouserPatchworkBlack from '../assets/trouser1.3.jpg';
import trouserUtilityBlack from '../assets/trouser1.4.jpg';
import trouserChainDetail from '../assets/trouser1.5.jpg';
import trouserSweatpants from '../assets/trouser2.jpg';
import trouserJoggers from '../assets/trouser3.jpg';
import trouserNumberSix from '../assets/trouser4.jpg';
import trouserGraphicRed from '../assets/trouser5.jpg';
import trouserGraphicSkull from '../assets/trouser6.webp';
import trouserGraphicWhite from '../assets/trouser7.webp';
import trouserDistressedGray from '../assets/trouser8.jpg';
import trouserCargoGray from '../assets/trouser9.jpg';
import trouserCargoTan from '../assets/trouser10.jpg';
import outerwearCamelTrench from '../assets/outwear1.jpg';
import outerwearEmbroideredCape from '../assets/outwear1.2.webp';
import outerwearOliveTrench from '../assets/outwear1.4.jpg';
import outerwearFurJacket from '../assets/outwear2.jpg';
import outerwearGrayCoat from '../assets/outwear3.jpg';
import outerwearUtilityCape from '../assets/outwear4.jpg';
import outerwearGothicCape from '../assets/outwear5.jpg';
import outerwearKhakiCape from '../assets/outwear6.jpg';
import outerwearRacingJacket from '../assets/outwear7.jpg';
import outerwearWhiteVest from '../assets/outwear8.jpg';
import outerwearPurpleRobe from '../assets/outwear9.jpg';
import outerwearGrayJacket from '../assets/outwear10.jpg';
import dressPrimaryGown from '../assets/dress1.jpg';
import dressPrimaryPinstripe from '../assets/dress1.1.jpg';
import dressPrimaryGarden from '../assets/dress1.2.jpg';
import dressPrimaryBlueCoat from '../assets/dress1.3.jpg';
import dressPrimaryRedCoat from '../assets/dress1.4.jpg';
import dressPrimaryHalter from '../assets/dress3.jpg';
import dressPrimaryBurgundy from '../assets/dress5.jpg';
import dressHoverGown from '../assets/dress2.jpg';
import dressHoverBronze from '../assets/dress4.jpg';
import dressHoverBurgundy from '../assets/dress6.jpg';
import dressHoverBlazer from '../assets/dress7.jpg';
import dressHoverShirt from '../assets/dress8.jpg';
import dressHoverSuit from '../assets/dress9.webp';
import dressHoverGray from '../assets/dress10.jpg';
import accessoryBeanie from '../assets/acces1.jpg';
import accessoryMessenger from '../assets/acces1.1.jpg';
import accessoryBackpack from '../assets/acces1.2.jpg';
import accessoryCamoPack from '../assets/acces1.3.jpg';
import accessoryBurgundyTote from '../assets/acces1.4.jpg';
import accessoryGreenBag from '../assets/acces1.5.jpg';
import accessoryClutch from '../assets/acces1.6.jpg';
import accessoryCap from '../assets/acces2.jpg';
import accessoryMask from '../assets/acces3.jpg';
import accessoryHelmet from '../assets/acces4.jpg';
import accessoryLedMask from '../assets/acces5.jpg';
import accessorySquareSunglasses from '../assets/acces6.jpg';
import accessoryRoundSunglasses from '../assets/acces7.jpg';
import accessoryGoldSunglasses from '../assets/acces8.jpg';
import accessoryGoggles from '../assets/acces9.jpg';
import accessoryVisor from '../assets/acces10.jpg';

const makeProduct = (id, name, price, category, image, hoverImage, description, sizes, isNew = false) => ({
  id,
  name,
  price,
  category,
  isNew,
  image,
  hoverImage,
  gallery: hoverImage ? [image, hoverImage] : [image],
  description,
  sizes,
});

export const products = [
  makeProduct(1, 'Linen Overshirt', 189, 'Shirts', 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&w=800&q=75', 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&w=800&q=75', 'A relaxed-fit overshirt crafted from premium European linen. Perfect for layering in any season.', ['XS', 'S', 'M', 'L', 'XL'], true),
  makeProduct(2, 'Ombre Distressed Sweater', 320, 'Knitwear', knitwear1, knitwear6, 'A soft crewneck with a charcoal-to-ivory ombre finish and distressed knit detailing.', ['S', 'M', 'L', 'XL']),
  makeProduct(4, 'Bordeaux Embellished Gown', 410, 'Dresses', dressPrimaryGown, dressHoverGown, 'A dramatic satin evening gown with a jeweled bodice and fluid floor-length drape.', ['XS', 'S', 'M', 'L']),
  makeProduct(5, 'Wool Overcoat', 620, 'Outerwear', 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&w=800&q=75', 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&w=800&q=75', 'Double-faced Italian wool. Cut for a relaxed, modern silhouette.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(6, 'Cotton Poplin Shirt', 145, 'Shirts', 'https://images.unsplash.com/photo-1602810319428-019690571b5b?auto=format&w=800&q=75', 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&w=800&q=75', 'Crisp, breathable Egyptian cotton. A wardrobe staple reimagined.', ['XS', 'S', 'M', 'L', 'XL']),
  makeProduct(7, 'Ribbed Knit Beanie', 55, 'Accessories', accessoryBeanie, accessoryCap, 'A soft ribbed beanie in warm rust, paired with a classic black knit cap.', ['One Size']),
  makeProduct(8, 'Colorblock Ribbed Sweater', 195, 'Knitwear', knitwear2, knitwear7, 'A ribbed crewneck with bold cream, brown, and black colorblocking.', ['XS', 'S', 'M', 'L', 'XL'], true),
  makeProduct(9, 'Striped Polo', 160, 'Shirts', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&w=800&q=75', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&w=800&q=75', 'A refined striped knit polo with a soft collar and an easy, polished drape.', ['S', 'M', 'L', 'XL']),
  makeProduct(10, 'Navy Pinstripe Dress', 260, 'Dresses', dressPrimaryPinstripe, dressHoverSuit, 'A tailored sleeveless pinstripe dress with a defined waist and full skirt.', ['XS', 'S', 'M', 'L'], true),
  makeProduct(11, 'Sable Belted Trench', 290, 'Outerwear', outerwearCamelTrench, outerwearOliveTrench, 'A classic double-breasted trench with a defined waist and soft neutral palette.', ['S', 'M', 'L', 'XL']),
  makeProduct(12, 'Monogram Messenger Bag', 240, 'Accessories', accessoryMessenger, accessoryBackpack, 'A compact black monogram messenger bag with a clean crossbody silhouette.', ['One Size'], true),
  makeProduct(14, 'Camo Print Backpack', 185, 'Accessories', accessoryCamoPack, accessoryBurgundyTote, 'A graphic camo backpack with a rounded shape and practical front pocket.', ['One Size']),
  makeProduct(15, 'Forest Green Shoulder Bag', 165, 'Accessories', accessoryGreenBag, accessoryClutch, 'A sculptural sage-green shoulder bag finished with polished gold-tone hardware.', ['One Size'], true),
  makeProduct(16, 'Black Balaclava Mask', 110, 'Accessories', accessoryMask, accessoryLedMask, 'A full-coverage black face mask with a sleek technical finish.', ['One Size']),
  makeProduct(17, 'Tactical Skull Helmet', 165, 'Accessories', accessoryHelmet, accessoryGoggles, 'A bold black protective helmet with integrated skull-inspired detailing.', ['One Size'], true),
  makeProduct(18, 'Harbor Poplin', 170, 'Shirts', shirt1, harborHover, 'A crisp, elevated staple featuring the uploaded studio shirt artwork and clean tailoring.', ['XS', 'S', 'M', 'L', 'XL']),
  makeProduct(19, 'Monarch Oxford', 175, 'Shirts', shirt2, monarchHover, 'A soft structured shirt with a refined silhouette and premium everyday finish.', ['XS', 'S', 'M', 'L', 'XL']),
  makeProduct(20, 'Cascade Cotton', 180, 'Shirts', shirt3, cascadeAltHover, 'Modern layering essential with tailored fit and subtle texture.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(21, 'Aster Button-Up', 185, 'Shirts', shirt4, asterAltHover, 'A relaxed button-front shirt built for everyday wear and versatile styling.', ['XS', 'S', 'M', 'L', 'XL']),
  makeProduct(22, 'Northline Twill', 190, 'Shirts', shirt6, northlineHover, 'Elevated essentials with a modern drape and understated finish.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(23, 'Marlow Chambray', 195, 'Shirts', shirt7, marlowHover, 'Premium cotton construction with a classic profile and an easy, polished fit.', ['XS', 'S', 'M', 'L', 'XL']),
  makeProduct(24, 'Ridge Stripe', 200, 'Shirts', shirt8, ridgeHover, 'A refined shirt silhouette designed for layered looks and all-day comfort.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(25, 'Drift Linen', 205, 'Shirts', shirt9, driftAltHover, 'Finished in a clean, contemporary line that pairs naturally with the rest of the collection.', ['XS', 'S', 'M', 'L', 'XL']),
  makeProduct(26, 'Patchwork Cable Sweater', 225, 'Knitwear', knitwear3, knitwear8, 'A cozy cable-knit sweater mixing colorblocked panels and textured stitches.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(27, 'Argyle Knit Vest', 185, 'Knitwear', knitwear4, knitwear9, 'A button-front sleeveless knit vest in a classic tan and cream argyle pattern.', ['XS', 'S', 'M', 'L', 'XL'], true),
  makeProduct(28, 'Evergreen Zip Knit', 210, 'Knitwear', knitwear5, knitwear10, 'A deep green and ivory knit top with a zip collar and clean colorblocked panels.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(29, 'Blue Denim Cargo Jeans', 220, 'Trousers', trouserCargoBlue, trouserCargoGray, 'Relaxed wide-leg denim with oversized utility pockets.', ['26', '28', '30', '32']),
  makeProduct(30, 'Gray Distressed Patch Jeans', 235, 'Trousers', trouserPatchworkGray, trouserDistressedGray, 'Washed gray wide-leg denim with distressed patchwork detailing.', ['26', '28', '30', '32'], true),
  makeProduct(31, 'Black Patchwork Jeans', 240, 'Trousers', trouserPatchworkBlack, trouserCargoTan, 'Dark paneled denim with contrast stitching and frayed patchwork seams.', ['26', '28', '30', '32']),
  makeProduct(32, 'Studded Utility Trousers', 265, 'Trousers', trouserUtilityBlack, trouserChainDetail, 'Statement black utility trousers with hardware details and a studded belt.', ['26', '28', '30', '32'], true),
  makeProduct(33, 'Everyday Wide-Leg Sweatpants', 145, 'Trousers', trouserSweatpants, trouserGraphicRed, 'Soft, relaxed-fit sweatpants with an elastic drawstring waist.', ['S', 'M', 'L', 'XL']),
  makeProduct(34, 'Washed Gray Joggers', 155, 'Trousers', trouserJoggers, trouserGraphicSkull, 'Easy wide-leg joggers in washed charcoal cotton with a drawstring waist.', ['S', 'M', 'L', 'XL']),
  makeProduct(35, 'Number Six Track Pants', 165, 'Trousers', trouserNumberSix, trouserGraphicWhite, 'Black track pants finished with a bold varsity number graphic.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(42, 'Garden Stripe Day Dress', 245, 'Dresses', dressPrimaryGarden, dressHoverGray, 'A light blue striped day dress with a bow collar and button-front full skirt.', ['XS', 'S', 'M', 'L'], true),
  makeProduct(43, 'Blue Double-Breasted Coat Dress', 385, 'Dresses', dressPrimaryBlueCoat, dressHoverBlazer, 'A sculpted pale blue coat dress with double-breasted tailoring.', ['XS', 'S', 'M', 'L']),
  makeProduct(44, 'Crimson Tweed Coat Dress', 395, 'Dresses', dressPrimaryRedCoat, dressHoverShirt, 'A rich crimson tweed coat dress with polished gold-tone buttons.', ['XS', 'S', 'M', 'L'], true),
  makeProduct(45, 'Burgundy Off-Shoulder Gown', 425, 'Dresses', dressPrimaryBurgundy, dressHoverBurgundy, 'A formal burgundy gown with an off-shoulder neckline and gathered satin skirt.', ['XS', 'S', 'M', 'L'], true),
  makeProduct(46, 'Ruby Halter Evening Dress', 310, 'Dresses', dressPrimaryHalter, dressHoverBronze, 'A striking halter dress with a sculpted bodice and asymmetrical draping.', ['XS', 'S', 'M', 'L']),
  makeProduct(47, 'Ivory Embroidered Cape', 275, 'Outerwear', outerwearEmbroideredCape, outerwearKhakiCape, 'A relaxed ivory cape with raised embroidery and an easy draped silhouette.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(48, 'Fur-Collar Leather Jacket', 340, 'Outerwear', outerwearFurJacket, outerwearWhiteVest, 'A statement leather jacket with a plush collar and contrasting panel details.', ['S', 'M', 'L', 'XL']),
  makeProduct(49, 'Slate Tailored Coat', 310, 'Outerwear', outerwearGrayCoat, outerwearGrayJacket, 'A clean-lined gray outer layer with sharp collar and understated hardware.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(50, 'Cocoa Utility Poncho', 255, 'Outerwear', outerwearUtilityCape, outerwearRacingJacket, 'A hooded utility cape with layered panels, straps, and contrast detailing.', ['S', 'M', 'L', 'XL']),
  makeProduct(51, 'Crimson Gothic Cape', 295, 'Outerwear', outerwearGothicCape, outerwearPurpleRobe, 'A dramatic hooded cape in black and crimson with distressed statement details.', ['S', 'M', 'L', 'XL'], true),
  makeProduct(52, 'Silver Frame Sunglasses', 125, 'Accessories', accessorySquareSunglasses, accessoryRoundSunglasses, 'Angular silver-frame sunglasses with dark lenses and refined metal temples.', ['One Size']),
  makeProduct(53, 'Gold Edge Sunglasses', 135, 'Accessories', accessoryGoldSunglasses, accessoryVisor, 'Statement gold-tone sunglasses with sculpted frames and dark lenses.', ['One Size'], true),
];

export const categories = ['All', 'Shirts', 'Knitwear', 'Trousers', 'Dresses', 'Outerwear', 'Accessories'];
