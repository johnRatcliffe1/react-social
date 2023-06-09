import React from "react";
import Image from 'react-bootstrap/Image';


const Post = ({ post, onLike, onDislike }) => {
  const handleLike = () => {
    onLike(post);
  };


const handleDislike = () => {
    onDislike(post);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Post</h5>
        <p className="card-text">Username: {post.username}</p>
        <p className="card-text">{post.text}</p>
        {post.image && <Image src={post.image} alt="Post" style={{ maxWidth: '500px', maxHeight: '300px' }} rounded thumbnail />}
        {!post.image && <Image src={"https://source.unsplash.com/random/?social"} alt="Post" style={{ maxWidth: '500px', maxHeight: '300px' }} rounded thumbnail />}
        <img
          src="https://dub07pap002files.storage.live.com/y4mV--jJd-xEmRPxkMrhB8ysKW7m10_LkVIRbBLoWz4KfyEMtL7p0Dw9u89NIwYokX6XGmfHZ_u3ufXgyNWChKbwCM-YLdwVzCGVVdrSFTnir-TPn58lCFZaJ1kmNnR3Bcs7UWpz_B4pGaoNcy_UhDhCz66f4McKlJD_O0q_l2HOoOy7rGr8tI31KDK28euiwEW?width=200&height=200&cropmode=none"
          alt="Like"
          width="50"
          height="50"
          backgroundColor="green"
          className="like-button"
          onClick={handleLike}
        />
        <span></span>
        <img
          src="https://dub07pap002files.storage.live.com/y4mO1R2oGw5dxDlzOolpywPYmXMLZ6ZwWP-KZWLC5l4AFgM0qSp1UjZQRhaqnEaUTxkelu3GP8kv6L2-WzcG2c6TGmwXIx9KDQ21Uflrrf6kDZoxRm0UgPRmSnMv3d7rK6x4z8XmWJp53rQ_uJnvCLkYPVANnOtNmKvGfyP52VnsGCMbKMkNeg27ph2ZFlQsFv_?width=200&height=200&cropmode=none"
          alt="Like"
          width="50"
          height="50"
          className="dislike-button"
          onClick={handleDislike}
        />
        <span>Likes: {post.likes}</span>
      </div>
    </div>
  );
};

export default Post;
