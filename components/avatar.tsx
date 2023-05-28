type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-4 h-4 lg:w-6 lg:h-6 rounded-full object-cover mr-2"
        alt={name}
      />
      <div className="text-sm lg:text-md text-accent-7 font-normal">{name}</div>
    </div>
  );
};

export default Avatar;
