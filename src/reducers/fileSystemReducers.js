import * as actions from "../actions/types";
import PROFILE_IMAGE from "../assets/icons/profile.svg";
import PROJECT_IMAGE from "../assets/icons/project.svg";
import ARCHIVE_IMAGE from "../assets/icons/archive.svg";
import firefox from "../assets/icons/browser.svg";
import dc from '../assets/icons/downcenter.svg';
import watch from '../assets/icons/watch.svg';

const initialState = {
  fileSystem: [
    {
      name: "desktop",
      type: "folder",
      location: [],
      child: [
        // {
        //   name: "Portfolio",
        //   type: "file",
        //   icon: PROFILE_IMAGE,
        //   link: "https://portfolio.raghavdhingra.com",
        //   inPage: true,
        //   location: ["desktop"],
        // },
        // {
        //   name: "Projects",
        //   type: "file",
        //   icon: PROJECT_IMAGE,
        //   link: "https://portfolio.raghavdhingra.com/projects",
        //   inPage: true,
        //   location: ["desktop"],
        // },
       
        {
          name: "eDistrict",
          type: "file",
          icon: ARCHIVE_IMAGE,
          link: "https://village.ksitmalappuzha.in",
          inPage: false,
          location: ["desktop"],
        },
        {
          name: "eOffice",
          type: "file",
          icon: ARCHIVE_IMAGE,
          link: "https://eoffice.ksitmalappuzha.in",
          inPage: false,
          location: ["desktop"],
        },
        
        {
          name: "Firefox",
          type: "file",
          icon: firefox,
          link: "https://ksitmalappuzha.in/theekurukkan",
          inPage: false,
          location: ["desktop"],
        },
        {
          name:"DC",
          type: "file",
          icon: dc,
          link: "https://downcenter.ksitmalappuzha.in/",
          inPage: false,
          location: ["desktop"],
        },
        {
          name:"Timeline",
          type: "file",
          icon: watch,
          link: "https://ksitmalappuzha.in/timeline",
          inPage: false,
          location: ["desktop"],
        },
        // { name: "docs", type: "file", child: "", location: ["desktop"] },
      ],
    },
    {
      name: "ksitmalp",
      type: "folder",
      child: [],
      location: [],
    },
    {
      name: "public",
      type: "folder",
      child: [],
      location: [],
    },
  ],
};
const localSave = (key, val) => localStorage.setItem(key, JSON.stringify(val));

const fileSystemReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.CHANGE_TEXT_IN_FILE: {
      const { pathArray, name, child } = payload;
      let curDir = state.fileSystem;
      pathArray.forEach(
        (path) => (curDir = curDir.find((system) => system.name === path).child)
      );
      let changedFile = curDir.find((system) => system.name === name);
      changedFile.child = child;
      localSave("fileSystem", { ...state });
      return { ...state };
    }
    case actions.MAKE_DIRECTORY_IN_SYSTEM: {
      const { pathArray, folderName } = payload;
      let curDir = state.fileSystem;
      pathArray.forEach(
        (path) => (curDir = curDir.find((system) => system.name === path).child)
      );
      let newFolder = {
        name: folderName,
        type: "folder",
        child: [],
        location: pathArray,
      };
      curDir.push(newFolder);
      localSave("fileSystem", { ...state });
      return { ...state };
    }
    case actions.MAKE_FILE_IN_SYSTEM: {
      const { pathArray, fileName } = payload;
      let curDir = state.fileSystem;
      pathArray.forEach(
        (path) => (curDir = curDir.find((system) => system.name === path).child)
      );
      let newFile = {
        name: fileName,
        type: "file",
        location: pathArray,
        child: "",
      };
      curDir.push(newFile);
      localSave("fileSystem", { ...state });
      return { ...state };
    }
    case actions.REMOVE_DIRECTORY_IN_SYSTEM: {
      const { pathArray, folderName } = payload;
      let newDirectory = [...state.fileSystem];
      let curDir = newDirectory;
      pathArray.forEach((path) => {
        curDir = curDir = curDir.find((system) => system.name === path).child;
      });
      let index = curDir.findIndex((dir) => dir.name === folderName);

      if (index === -1) return { ...state };
      curDir.splice(index, 1);
      localSave("fileSystem", { ...state, fileSystem: [...newDirectory] });
      return { ...state, fileSystem: [...newDirectory] };
    }
    case actions.PREVIOUS_STATE_SET: {
      let previousState = JSON.parse(localStorage.getItem("fileSystem"));
      if (previousState) return { ...previousState };
      else return state;
    }
    default:
      return state;
  }
};

export default fileSystemReducers;
