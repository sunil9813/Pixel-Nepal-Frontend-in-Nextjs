import { sellContentBlog } from "@/data/dummydata";
import { Button, Card, CardBody, CardFooter, CardHeader, Carousel, IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import Slider from "react-slick";

export const SellContentBlog = () => {
  return (
    <>
      <section className="sell-content-blog">
        <div className="containers py-8">
          <SellContentBlogSlider />
          <SellContentBlogList />
        </div>
      </section>
    </>
  );
};
export const SellContentBlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        {/* <Slider {...settings}> */}
        {sellContentBlog.slice(0, 1).map((item) => (
          <Card className="w-full flex-row-reverse p-5 shadow-shadow2 h-[50vh]" key={item.id}>
            <CardHeader shadow={false} floated={false} className="m-0 w-2/3 shrink-0">
              <img src={item.image} alt="card-image" className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="indigo" className="mb-4 uppercase font-normal">
                {item.category}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {item.title}
              </Typography>
            </CardBody>
          </Card>
        ))}
        {/* </Slider> */}
      </div>
    </>
  );
};
export const SellContentBlogList = () => {
  return (
    <>
      <div className="my-12 grid grid-cols-3 gap-10">
        {sellContentBlog.map((item) => (
          <Card key={item.id} className=" shadow-shadow2">
            <CardHeader shadow={false} floated={false} className="h-72">
              <img src={item.image} alt="card-image" className="h-full w-full object-cover hover:scale-110 transition ease-in-out duration-300" />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="indigo" className="mb-4 uppercase font-normal">
                {item.category}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2 h-24">
                {item.title}
              </Typography>
              <Typography variant="small" color="blue-gray" className="pt-8">
                By App Technologies July 27, 2023
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="w-full m-auto">
        <div className="flex items-center justify-between p-4 gap-5 w-1/2 m-auto">
          <Button color="blue-gray" size="md">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" color="blue-gray" size="md">
              1
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="md">
              2
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="md">
              3
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="md">
              ...
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="md">
              8
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="md">
              9
            </IconButton>
            <IconButton variant="text" color="blue-gray" size="md">
              10
            </IconButton>
          </div>
          <Button color="blue-gray" size="md">
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
