type Work = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  url?: string;
};

type PostComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type User = {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
