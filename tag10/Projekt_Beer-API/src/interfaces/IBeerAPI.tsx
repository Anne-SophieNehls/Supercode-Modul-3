interface IBeerAPI {
  image_url: string;
  _id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  attenuation_level: number;
  brewers_tips: string;
  contributed_by: string;
  expireAt: Date;
  __v: number;
}

export default IBeerAPI;
