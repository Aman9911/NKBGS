import GalleryNav from "@/app/components/client/navbar/GalleryNav";

export const metadata = {
  title: {
    template: `%s-Gallery`,
    default: "Gallery",
  },
};

const GalleryLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <GalleryNav />
      {children}
    </div>
  );
};

export default GalleryLayout;
