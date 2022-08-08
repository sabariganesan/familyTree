export let dataLatest = {
  profileDetails: [
    {
      profileId: "P123",
      name: "Stalin",
      gender: "Male",
      profileImage:
        "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/2/6/w1200X800/MK_Stalin_PTI.jpg",
      phoneNumber: "123",
    },
    {
      profileId: "P124",
      name: "Karunanithi",
      gender: "Male",
      profileImage:
        "https://upload.wikimedia.org/wikipedia/commons/2/25/M._Karunanidhi_.jpg",
      phoneNumber: "124",
    },
    {
      profileId: "P125",
      name: "Dayaluammal",
      gender: "Female",
      profileImage:
        "https://starsunfolded.com/wp-content/uploads/2018/08/Dayalu-Ammal-9.jpg",
      phoneNumber: "125",
    },
    {
      profileId: "P126",
      name: "Durga",
      gender: "Female",
      profileImage:
        "https://www.behindwoods.com/tamil-movies/slideshow/kalaignar-karunanidhicomplete-family-tree/images/durga-stalin.jpg",
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
      profileImage:
        "https://www.newsbugz.com/wp-content/uploads/2021/04/inbanithi-1-700x700.jpg",
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

export const newOne = {
  mappingDetails: [
    {
      status: "requested",
      sourceNode: "3a878c85-bd47-4a42-8713-a0cbbaa21603",
      targetNode: "e1e0c70c-2403-4ae9-a74b-aa48a5779085",
      mappingId: "e750c862-e80d-4889-8761-0469916f4338",
      relationShip: "Spouse",
    },
    {
      status: "requested",
      sourceNode: "3a878c85-bd47-4a42-8713-a0cbbaa21603",
      targetNode: "07d2c8d7-87b2-4185-9a89-f4ca4f9155f9",
      mappingId: "2f0e0068-efd2-42a5-a1d1-1036a457ab2c",
      relationShip: "Child",
    },
    {
      status: "requested",
      sourceNode: "e1e0c70c-2403-4ae9-a74b-aa48a5779085",
      targetNode: "07d2c8d7-87b2-4185-9a89-f4ca4f9155f9",
      mappingId: "2f0e0068-efd2-42a5-a1d1-1036a457ab2c",
      relationShip: "Child",
    },
    {
      status: "requested",
      sourceNode: "3a878c85-bd47-4a42-8713-a0cbbaa21603",
      targetNode: "9e811b8b-ba35-40e5-b0d7-b4e7f49c21fb",
      mappingId: "977f1e3a-ecb1-4318-a5af-71a41cdb23a7",
      relationShip: "Father",
    },
    {
      status: "requested",
      sourceNode: "3a878c85-bd47-4a42-8713-a0cbbaa21603",
      targetNode: "d45d597d-1e4c-47fe-8d31-3c0ecbaccba6",
      mappingId: "8ff61ee8-67e3-41ca-8808-f8b2e9e00759",
      relationShip: "Mother",
    },
  ],
  profileDetails: [
    {
      name: "wife",
      gender: null,
      profileId: "e1e0c70c-2403-4ae9-a74b-aa48a5779085",
      mobileNumber: "9080961863",
      profileImage: null,
    },
    {
      name: "baby",
      gender: null,
      profileId: "07d2c8d7-87b2-4185-9a89-f4ca4f9155f9",
      mobileNumber: "9080961763",
      profileImage: null,
    },
    {
      name: "father",
      gender: null,
      profileId: "9e811b8b-ba35-40e5-b0d7-b4e7f49c21fb",
      mobileNumber: "9080961663",
      profileImage: null,
    },
    {
      name: "mother",
      gender: null,
      profileId: "d45d597d-1e4c-47fe-8d31-3c0ecbaccba6",
      mobileNumber: "9080961563",
      profileImage: null,
    },
    {
      name: "Aravind_7",
      gender: "male",
      profileId: "3a878c85-bd47-4a42-8713-a0cbbaa21603",
      mobileNumber: "9080961897",
      profileImage: "filename.jpg",
    },
  ],
};
