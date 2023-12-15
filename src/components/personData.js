const personData = [
  {
    image:
      "https://cdn.dribbble.com/userupload/11799708/file/original-350d80ef4bc4e0dcbf768d502b9acf05.jpg?resize=1024x894&vertical=center",
    smallImage: "https://cdn.dribbble.com/users/414979/avatars/small/6a3fb4b20c29dce831a74dc7dbf591c4.png?1695741732",
    title: "John Doe",
    tag: "PRO",
    like: 15,
    views: 1000,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11808472/file/original-6f8bb2b8475f4a05599fdf320a50b55e.png?resize=1504x1128",

    smallImage: "https://cdn.dribbble.com/users/3365798/avatars/small/27142d0984a19231593be35a9972bbc4.jpg?1673891024",
    title: "Jane Smith",
    tag: "TEAM",
    like: 20,
    views: 1500,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11807970/file/original-ad7c7d672a74a6cc9ca21650bd3a961f.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/517584/avatars/small/c28c82353753a85911e16e253ae06c86.jpeg?1648414681",
    title: "Bob Johnson",
    tag: "PRO",
    like: 12,
    views: 800,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11805591/file/original-e347982fc9405f8a7bd0cbad812f1c4e.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/4189231/avatars/small/7078fc7fecf46fb9af392d0d4cdc7252.png?1660299702",
    title: "Emily Davis",
    tag: "TEAM",
    like: 25,
    views: 1200,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11807143/file/original-8c2a77035864c322bbde89601f3b22a1.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/472667/avatars/small/bf4ef6a50b3a0b8f1c4e3d56bbe4cac1.jpg?1681254858",
    title: "Chris Anderson",
    tag: "PRO",
    like: 18,
    views: 1100,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11813092/file/original-e245068360275f2bc3615d1dd22b3ece.png?resize=1200x900",
    smallImage: "https://cdn.dribbble.com/users/1043230/avatars/small/092502a9a3cea1c44dd5e5f9939430b4.png?1540212885",
    title: "Sara Brown",
    tag: "TEAM",
    like: 22,
    views: 1300,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/10599692/file/original-7eeb5a63a2d77c6b6a39864d53165cd2.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/15687/avatars/small/3c467725100c037f0781f583af65a2dd.jpg?1515580842",
    title: "Michael Miller",
    tag: "PRO",
    like: 16,
    views: 900,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11815330/file/original-d7d285c0007155bbd18e1aa4d64c0ec4.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/623914/avatars/small/5c0bfacbf9e6dfbeb239ad3c3735c095.jpg?1698108138",
    title: "Emma Wilson",
    tag: "TEAM",
    like: 19,
    views: 1000,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11807894/file/original-f05224bfdb4afa47a831614115626764.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/702789/avatars/small/62dc313bebbc78f08ffd3076b6228377.png?1646754829",
    title: "Daniel Lee",
    tag: "PRO",
    like: 14,
    views: 950,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11798895/file/original-61f74dd9e2e02eeb339b1867699f1e88.png?resize=1504x1126",
    smallImage: "https://cdn.dribbble.com/users/494681/avatars/small/950f4dc2ceb49585508a07fcbc01b4f4.png?1701197706",
    title: "Olivia Turner",
    tag: "TEAM",
    like: 21,
    views: 1100,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11767296/file/original-068f18005072eeaaef6e1de84bea0051.jpg?resize=1504x1063",
    smallImage: "https://cdn.dribbble.com/users/414979/avatars/small/6a3fb4b20c29dce831a74dc7dbf591c4.png?1695741732",
    title: "William Taylor",
    tag: "PRO",
    like: 17,
    views: 1050,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11801198/file/original-1ec325e18a2d38479bfa1164b4c07399.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/3365798/avatars/small/27142d0984a19231593be35a9972bbc4.jpg?1673891024",
    title: "Aria Foster",
    tag: "TEAM",
    like: 23,
    views: 1400,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11800926/file/original-599922a361dd6eba5688c77ba9d44e5a.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/517584/avatars/small/c28c82353753a85911e16e253ae06c86.jpeg?1648414681",
    title: "Jackson Harris",
    tag: "PRO",
    like: 13,
    views: 850,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11808468/file/original-01cdb70ff6baf3871e58f3e22e0d1d59.png?resize=1504x1204",
    smallImage: "https://cdn.dribbble.com/users/4189231/avatars/small/7078fc7fecf46fb9af392d0d4cdc7252.png?1660299702",
    title: "Ava King",
    tag: "TEAM",
    like: 26,
    views: 1600,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11797185/file/original-c8548bc55b5f5e46bb961a166fdcec3b.jpg?resize=1504x843",
    smallImage: "https://cdn.dribbble.com/users/472667/avatars/small/bf4ef6a50b3a0b8f1c4e3d56bbe4cac1.jpg?1681254858",
    title: "Ethan Turner",
    tag: "PRO",
    like: 20,
    views: 1200,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11801861/file/original-394de64d5215b0914ddde0cf40d7bfbb.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/1043230/avatars/small/092502a9a3cea1c44dd5e5f9939430b4.png?1540212885",
    title: "Madison Foster",
    tag: "TEAM",
    like: 18,
    views: 900,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11795363/file/original-0d35135fac9a8bedc191b327df0eca8a.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/15687/avatars/small/3c467725100c037f0781f583af65a2dd.jpg?1515580842",
    title: "Liam Clark",
    tag: "PRO",
    like: 15,
    views: 1000,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11804188/file/original-d57e932c9ae59874d16dbd6d93a7e1b4.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/623914/avatars/small/5c0bfacbf9e6dfbeb239ad3c3735c095.jpg?1698108138",
    title: "Zoe Wright",
    tag: "TEAM",
    like: 22,
    views: 1300,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11811639/file/original-4fb54013ca504e04661510902b3bcfdc.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/702789/avatars/small/62dc313bebbc78f08ffd3076b6228377.png?1646754829",
    title: "Mason White",
    tag: "PRO",
    like: 16,
    views: 950,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11819188/file/original-35ad44cef73c90a415febd23664dd76e.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/494681/avatars/small/950f4dc2ceb49585508a07fcbc01b4f4.png?1701197706",
    title: "Grace Johnson",
    tag: "TEAM",
    like: 19,
    views: 1100,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11800592/file/original-231dbd63d13c4686bc0f78f6bb844725.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/414979/avatars/small/6a3fb4b20c29dce831a74dc7dbf591c4.png?1695741732",
    title: "Aiden Brown",
    tag: "PRO",
    like: 14,
    views: 850,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11813100/file/original-1b20446808877523e00b13c4eb172819.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/3365798/avatars/small/27142d0984a19231593be35a9972bbc4.jpg?1673891024",
    title: "Chloe Adams",
    tag: "TEAM",
    like: 25,
    views: 1200,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11795084/file/original-0725f961d70c1c87384ff6485b063ae8.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/517584/avatars/small/c28c82353753a85911e16e253ae06c86.jpeg?1648414681",
    title: "Elijah Wilson",
    tag: "PRO",
    like: 17,
    views: 1050,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11798891/file/original-617665032288a23502dd777eec6c8c13.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/4189231/avatars/small/7078fc7fecf46fb9af392d0d4cdc7252.png?1660299702",
    title: "Lily Davis",
    tag: "TEAM",
    like: 21,
    views: 1100,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11808964/file/original-e3fdff6f0bf3a27edcda452c3deb79e6.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/472667/avatars/small/bf4ef6a50b3a0b8f1c4e3d56bbe4cac1.jpg?1681254858",
    title: "Carter Thomas",
    tag: "PRO",
    like: 23,
    views: 1400,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11812427/file/original-ce837818fed1c102d3af745f2beabca1.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/1043230/avatars/small/092502a9a3cea1c44dd5e5f9939430b4.png?1540212885",
    title: "Ava Wright",
    tag: "TEAM",
    like: 13,
    views: 800,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11805771/file/original-7bb39a62d126222bfad827c8c192c4d7.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/15687/avatars/small/3c467725100c037f0781f583af65a2dd.jpg?1515580842",
    title: "Logan Harris",
    tag: "PRO",
    like: 26,
    views: 1600,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11648493/file/original-a4396543f2791e85fcbde6d5fe746638.jpg?resize=1504x1133",
    smallImage: "https://cdn.dribbble.com/users/623914/avatars/small/5c0bfacbf9e6dfbeb239ad3c3735c095.jpg?1698108138",
    title: "Mia Turner",
    tag: "TEAM",
    like: 15,
    views: 1000,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11810344/file/original-ea16bfabd0efa82932c3e8f2f4c7b19f.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/702789/avatars/small/62dc313bebbc78f08ffd3076b6228377.png?1646754829",
    title: "Noah King",
    tag: "PRO",
    like: 20,
    views: 1500,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11796469/file/original-a7e2a64cbc031fe7f0676ef4365daf20.jpg?resize=1504x1504",
    smallImage: "https://cdn.dribbble.com/users/494681/avatars/small/950f4dc2ceb49585508a07fcbc01b4f4.png?1701197706",
    title: "Aria Foster",
    tag: "TEAM",
    like: 18,
    views: 1100,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11780299/file/original-6a4066592b39793d75c3b8c434cda8f3.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/414979/avatars/small/6a3fb4b20c29dce831a74dc7dbf591c4.png?1695741732",
    title: "James Turner",
    tag: "PRO",
    like: 24,
    views: 1300,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11780299/file/original-6a4066592b39793d75c3b8c434cda8f3.jpg?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/3365798/avatars/small/27142d0984a19231593be35a9972bbc4.jpg?1673891024",
    title: "Sophie Martinez",
    tag: "TEAM",
    like: 16,
    views: 900,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11800384/file/original-6671a867379323f9f3ebcbcaf3dae7a3.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/517584/avatars/small/c28c82353753a85911e16e253ae06c86.jpeg?1648414681",
    title: "Eli Foster",
    tag: "PRO",
    like: 19,
    views: 1000,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/9284447/file/original-cea5f1c6d8826baf8c5485a4421e5f6d.png?resize=1504x1128",
    smallImage: "https://cdn.dribbble.com/users/4189231/avatars/small/7078fc7fecf46fb9af392d0d4cdc7252.png?1660299702",
    title: "Lily Wright",
    tag: "TEAM",
    like: 22,
    views: 1200,
  },
  {
    image: "https://cdn.dribbble.com/userupload/11802600/file/original-bf6b6ca45abf5e6ed53d880d2bef9db2.png?resize=1504x1128&vertical=center",
    smallImage: "https://cdn.dribbble.com/users/15687/avatars/small/3c467725100c037f0781f583af65a2dd.jpg?1515580842",
    title: "Mason Turner",
    tag: "PRO",
    like: 14,
    views: 950,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11797412/file/original-2f9154519a233a46f895cf3e39bd21c0.png?resize=1504x1128",
      smallImage: "https://cdn.dribbble.com/users/414979/avatars/small/6a3fb4b20c29dce831a74dc7dbf591c4.png?1695741732",
    title: "Zoe Adams",
    tag: "TEAM",
    like: 21,
    views: 1100,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11749091/file/original-56555e9d5d1888916a045a8026d49ae6.png?resize=1504x1128",
      smallImage: "https://cdn.dribbble.com/users/414979/avatars/small/6a3fb4b20c29dce831a74dc7dbf591c4.png?1695741732",
    title: "Ethan Harris",
    tag: "PRO",
    like: 17,
    views: 1050,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11803924/file/original-5f310d87b9f05ae9f6e9a607adad41fd.jpg?resize=1504x1128",
      smallImage: "https://cdn.dribbble.com/users/414979/avatars/small/6a3fb4b20c29dce831a74dc7dbf591c4.png?1695741732",
    title: "Ava Wright",
    tag: "TEAM",
    like: 23,
    views: 1400,
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/11793288/file/original-7c114064762c1d010f4377ad2eb6a29f.png?resize=1504x1128",
      smallImage: "https://cdn.dribbble.com/users/3365798/avatars/small/27142d0984a19231593be35a9972bbc4.jpg?1673891024",
    title: "Jackson Davis",
    tag: "PRO",
    like: 13,
    views: 850,
  },
  
];
export default personData;
