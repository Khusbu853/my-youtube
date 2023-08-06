import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // if(!isMenuOpen) return null;         //Early return Pattern


  const List = [
    {
      title: "Home",
      url: "data:image/png;base64,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",
    },
    {
      title: "Shorts",
      url: "data:image/png;base64,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",
    },
    {
      title: "Subscription",
      url: "https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png",
    },
    {
      title: "Library",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADPz89hYWGWlpalpaXDw8OLi4v8/Pzv7+/p6enT09PZ2dkiIiLy8vJMTExFRUXj4+NycnKvr6+FhYVYWFg6Ojqfn59RUVEKCgpaWlrAwMBCQkJISEg1NTVsbGwVFRUuLi6Pj48HnYJSAAAEGklEQVR4nO3di1raQBCG4QU5JBBCAdFWrVbv/yILta2Kq93DTOYf+n9X4PswEjanDYExxhhjjDHGGGPspabZLMdD17XNQLx2t12NbFrPl/rKbmuk+939VNfXGPuOrWaKwLG17rkHtVGdWtP+dNXrAK+tYS89qhB31qzXXSkMameNettWXnhnbTpJ/BsVakaPraSF1qD3CR/64T5C8S+br9aeSEtJ4MJaE2suKZxZa2KtJYUTa000yX9EgCVFpFZQeGGNidadvXBMIYUUmkchhRTaRyGFFNpH4RDCe1HRaQjC3eybqOltCMJpWHwXRb0JQxjCpajqdSjCoDapacJuf3HSzU5YGBZrUdjf0oSRC9cTaaHWpCIJdSYVShhahUnFEoYwr9LEQhPKX/yAE4b+SxXoXXhC6UlFFMpOKqQwtIKTiimUnFRUodykwgpDK3T3Ea5QalKRhTKTCi0UWftjCyUmFV1YP6nwwuq1P76wdlI9COsm1YUwLCruevQhrJlUL8LySXUjLD5L5UdYOqmehOH27IVFa39fwpIz/96E+ZPqThgWmWt/f8LcSfUozLtG5VIYFhnfqT6FOZPqVZg+qW6FyUd/v8LUSXUsnP04c2HqSsOrMP0MnFNhxorfpzBnLexRmHeO2KEwc/3kT5i7BvYmzPnN7VJYcNbUl7DkfKInYe75C3fCwvP6foSl12a8CPviu2ucCCuukfoQ1lzn9iBsq+6qcSCsvN8EX1j7FAa6sP5JGnChwDMm2EKJ54SQhTJPJQILb2WegsIVSj3JhiosWynFAhUW3VcSD1Mo+VwQolDyiRlIoeCEHsMTSj9jiSasWynFAhMqvD4TSyj/FDCWUOedA0BCpRe84gg1JvQYilDrrRgwQsVXEGMI9d5OgyF8Un0POIJQNwoppNA+Cimk0D4KKaTQPgr9C9P2KEkTPgz/5ye0ERRqrtTLS9srKE0IuCnZaLSSFIJtfvhc4haIacJgtQPwZ0XeBlwh1DqpW1PihlaJws3wgH+Vuk9nohDwiJi6Y1eqEO5DTN5qNVWItBvwr5I3zksWhv3wik9Kf+N8urB/HJzxcRmPG6ULkYjX6cAcYehRBjXxWJ8vBPm6ucvb2TFPGDb2x8WsDzBfeDA+Wf5GXef6CoSHut3lw+muGAO0nYxL9lYtEfqKQv9R6D8K/Ueh/yj0H4X+o9B/FPrvvxTuJ+bln435OMiru6MbQWFrjYl2IShsrDHRJIVBcc/l8kSFiFfoZYVLa00sUWGju8N7WaLCMLXmRJIVIt4NJCxUfEKwNGFh2FqD3iUtbK6sRadJC0OP9n0qLgw92KcoLwwN1v+igvDwjYp00FARHg79OKOqJDz8Rp2rvR0gr72W8FDTdmP78u4JYowxxhhjjDHG2Nn1E2sTe015x+DfAAAAAElFTkSuQmCC",
    },
    {
      title: "History",
      url: "data:image/png;base64,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",
    },
  ];
  const ExploreList = [
    {
      title: "Trending",
      url: "https://icon-library.com/images/trending-icon/trending-icon-15.jpg",
    },
    {
      title: "Music",
      url: "https://w7.pngwing.com/pngs/274/853/png-transparent-musical-note-icon-music-notes-miscellaneous-logo-monochrome-thumbnail.png",
    },
    {
      title: "Movies",
      url: "https://www.pngitem.com/pimgs/m/144-1441488_computer-icons-clapperboard-film-animation-clapperboard-png-transparent.png",
    },
    {
      title: "Sports",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPduyf42DLFEHxNBfYo1giTwh_IqqDgKTnLg&usqp=CAU",
    },
    {
      title: "News",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0DwawDZ0K3nRjLRI4RJ4n1qA59c4PG1jbQ&usqp=CAU",
    },
  ];
  const helpList = [
    {
      title: "Settings",
      url: "https://i.pinimg.com/originals/10/04/ef/1004efe87034297edcfe1033818084c5.jpg",
    },
    {
      title: "Report history",
      url: "https://cdn-icons-png.flaticon.com/512/32/32223.png",
    },
    {
      title: "Help",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6TFMzmmq1WzuWGWZTmaP_rOzs0O-an7fpxN78FZvhlaBshdO3Qa-9BelWwYOlxTicIQ&usqp=CAU",
    },
    {
      title: "Send feedback",      url: "https://cdn-icons-png.flaticon.com/512/2139/2139040.png",
    },
  ];



  const displayList = (list, heading) => {
    return (
      <div className="w-full mr-20">
        {heading && <h1 className="ml-6 font-semibold mt-2">{heading}</h1>}
        <ul className="items-center border-b-2 border-gray-200">
          {list.map((item, index) => (
            <div className="flex my-4" key={index}>
              <img src={item.url} alt="icon" className="h-7 w-9 mx-6" />
              <li className="text-sm cursor-pointer">{item.title}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  };
  return isMenuOpen? (
    <div className="mt-24">
      {displayList(List)}
      {displayList(ExploreList, "Explore")}
      {displayList(helpList, "Help")}
    </div>
  ) : null;
};

export default Sidebar;
