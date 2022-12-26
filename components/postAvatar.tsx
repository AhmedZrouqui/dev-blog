type Props = {
    name: string
    picture: string
  }
  
  const PostAvatar = ({ name, picture }: Props) => {
    return (
      <div className="flex items-center">
        <img src={picture} className="w-6 h-6 lg:w-8 lg:h-8 rounded-full object-cover mr-2" alt={name} />
        <div className="text-md lg:text-lg font-medium">{name}</div>
      </div>
    )
  }
  
  export default PostAvatar
  