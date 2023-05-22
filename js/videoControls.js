var myFP = fluidPlayer("video", {
  layoutControls: {
    controlBar: {
      autoHideTimeout: 1,
      animated: true,
      autoHide: true,
    },
    htmlOnPauseBlock: {
      html: null,
      height:null,
      width: null,
    },
    autoPlay: false,
    mute: true,
    allowTheatre: true,
    playPauseAnimation: true,
    playbackRateEnabled: true,
    allowDownload: false,
    playButtonShowing: true,
    fillToContainer: false,
    posterImage: ".././assets/previa_video.png",
  },
  vastOptions: {
    adList: [],
    adCTAText: false,
    adCTATextPosition: "",
  },
});
