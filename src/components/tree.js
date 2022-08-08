export let dataLatest = {
  profileDetails: [
    {
      profileId: "P123",
      name: "Stalin",
      gender: "Male",
      profileImage: "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/2/6/w1200X800/MK_Stalin_PTI.jpg",
      phoneNumber: "123",
    },
    {
      profileId: "P124",
      name: "Karunanithi",
      gender: "Male",
      profileImage: "https://upload.wikimedia.org/wikipedia/commons/2/25/M._Karunanidhi_.jpg",
      phoneNumber: "124",
    },
    {
      profileId: "P125",
      name: "Dayaluammal",
      gender: "Female",
      profileImage: "https://starsunfolded.com/wp-content/uploads/2018/08/Dayalu-Ammal-9.jpg",
      phoneNumber: "125",
    },
    {
      profileId: "P126",
      name: "Durga",
      gender: "Female",
      profileImage: "https://www.behindwoods.com/tamil-movies/slideshow/kalaignar-karunanidhicomplete-family-tree/images/durga-stalin.jpg",
      phoneNumber: "126",
    },
    {
      profileId: "P127",
      name: "Uthayanithi",
      gender: "Male",
      profileImage: "https://wallpapercave.com/wp/wp7848981.jpg",
      phoneNumber: "127",
    },
    {
      profileId: "P128",
      name: "Keerthika",
      gender: "Female",
      profileImage: "https://labuwiki.com/wp-content/uploads/2021/06/32-10.jpg",
      phoneNumber: "128",
    },
    {
      profileId: "P129",
      name: "Inba",
      gender: "Male",
      profileImage: "https://www.newsbugz.com/wp-content/uploads/2021/04/inbanithi-1-700x700.jpg",
      phoneNumber: "129",
    },
    
    
  ],
  mappingDetails: [
    {
      mappingId: "M123124",
      relationShip: "Father",
      sourceNode: "P124",
      targetNode: "P123",
      status: "Requested",
    },
    {
      mappingId: "M123125",
      relationShip: "Mother",
      sourceNode: "P125",
      targetNode: "P123",
      status: "Requested",
    },
    {
      mappingId: "M124125",
      relationShip: "Spouse",
      sourceNode: "P124",
      targetNode: "P125",
      status: "Requested",
    },
    {
      mappingId: "M124125",
      relationShip: "Spouse",
      sourceNode: "P123",
      targetNode: "P126",
      status: "Requested",
    },
    {
      mappingId: "M123126",
      relationShip: "Father",
      sourceNode: "P123",
      targetNode: "P127",
      status: "Requested",
    },
    {
      mappingId: "M123126",
      relationShip: "Mother",
      sourceNode: "P126",
      targetNode: "P127",
      status: "Requested",
    },
    {
      mappingId: "M124125",
      relationShip: "Spouse",
      sourceNode: "P127",
      targetNode: "P128",
      status: "Requested",
    },
    {
      mappingId: "M123126",
      relationShip: "Father",
      sourceNode: "P127",
      targetNode: "P129",
      status: "Requested",
    },
    {
      mappingId: "M123126",
      relationShip: "Mother",
      sourceNode: "P128",
      targetNode: "P129",
      status: "Requested",
    },
  ],
};
