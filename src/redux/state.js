import licking from './licking.svg';
import loughing from './loughing.svg';
import sad from './sad.svg';
import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '9'},
            {id: 2, message: 'Its my first...', likesCount: '12'},
            {id: 3, message: 'Hey', likesCount: '10'}
        ],
        newPostText: 'bla-bla'
    },
    dialogsPage: {
        messages: [
            {message: 'Hi', id: '1'},
            {message: 'Wats up', id: '2'},
            {message: 'The first', id: '3'},
            {message: 'Yahooo', id: '4'}
        ],
        dialogs: [
            {name: 'Masha', id: '1'},
            {name: 'Dasha', id: '2'},
            {name: 'Misha', id: '3'},
            {name: 'Vasya', id: '4'}
        ]
    },
    sidebarPage: {
        myFriends: [
            {name: 'Vasya', avatar: licking},
            {name: 'Petya', avatar: loughing},
            {name: 'Tony', avatar: sad},
            {name: 'Vika', avatar: licking},
        ]
    }
}

let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: '0'
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

let updateNewPostText =(newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export {addPost};
export {updateNewPostText};
export default state;