const imageUrl = (url: string): string =>
  url.replace('eskwelabs-assets.s3.ap-southeast-1.amazonaws.com', 'assets.eskwelabs.com');

export default imageUrl;
