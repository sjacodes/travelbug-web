// Helpful Cloudinary Walkthroughs
// images - https://cloudinary.com/blog/the_holy_grail_of_image_optimization_or_balancing_visual_quality_and_file_size
// video - https://support.cloudinary.com/hc/en-us/articles/115003021231-How-can-I-optimize-my-videos-

// cloudinary user name
const user_name = ""
// image width for homepage-hotel-img and homepage-hotel-img-third
const im_width = 450;
// image quality runs between 0 to 100
const im_qual = '100';
// video quality
const vid_qual = '60'


const urls = {
    video: `https://res.cloudinary.com/${user_name}/video/upload/q_${vid_qual}/vc_auto/v1549030145/travelbug/travel.mp4`,
    image: `https://res.cloudinary.com/${user_name}/image/upload/w_${im_width}/q_${im_qual}/v1549029180/travelbug/homepageImage.png`,
    image2: `https://res.cloudinary.com/${user_name}/image/upload/w_${im_width}/q_${im_qual}/v1549029180/travelbug/BottomBladeImage1.png`,
    image3: `https://res.cloudinary.com/${user_name}/image/upload/w_${im_width}/q_${im_qual}/v1549029180/travelbug/BottomBladeImage2.png`
}

export default urls;