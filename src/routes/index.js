// Importing Auth Pages
import {
  Signup,
  Login,
  // ForgotPassword,
  // VerifyEmail,
  // EmailVerified,
  SelectCategories,
} from '../screens/Auth';

// Importing Protected Pages
import Home from '../screens/Home';
import Category from '../screens/Category';
import ForYou from '../screens/ForYou';
// import TrendingPage from '../screens/Trending';
// import CreatePost from '../screens/CreatePost';
// import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import { About } from '../screens/About/About';
// import Search from '../screens/Search';
// import Course from '../screens/Course';
// import Cart from '../screens/Cart';
import CourseDetails from '../screens/CourseDetails';

// Importing Common Pages
// import PrivacyPolicies from '../screens/PrivacyPolicies';
// import TermsOfServices from '../screens/TermsOfServices';
//import ContactUs from '../screens/ContactUs';
//import { BookingForm } from '../components/MainBooking/BookingForm';

export const authRoutes = [
  {
    id: 1,
    path: '/signup',
    component: Signup,
  },
  {
    id: 2,
    path: '/login',
    component: Login,
  },
  // {
  //   id: 3,
  //   path: '/verify-email',
  //   component: VerifyEmail,
  // },
  // {
  //   id: 4,
  //   path: '/email-verification/:verificationToken',
  //   component: EmailVerified,
  // },
  // {
  //   id: 5,
  //   path: '/forgot-password',
  //   component: ForgotPassword,
  // },
  {
    id: 6,
    path: '/select-intrested-categories',
    component: SelectCategories,
  },
];

export const protectedRoutes = [
  {
    id: 1,
    path: '/home',
    component: Home,
  },
  {
    id: 2,
    path: '/contact-us',
    component: Category,
  },
  {
    id: 3,
    path: '/booking/form',
    component: ForYou,
  },
  {
    id: 4,
    path: '/about',
    component: About,
  },
  
  // {
  //   id: 3,
  //   path: '/trending',
  //   component: TrendingPage,
  // },
  // {
  //   id: 4,
  //   path: '/create-post',
  //   component: CreatePost,
  // },
  // {
  //   id: 5,
  //   path: '/chat/:receiverId',
  //   component: Chat,
  // },
  {
    id: 6,
    path: '/profile',
    component: Profile,
  },
  // {
  //   id: 7,
  //   path: '/course/:courseId',
  //   component: Course,
  // },
  // {
  //   id: 8,
  //   path: '/search/:searchTerm',
  //   component: Search,
  // },
  // {
  //   id: 9,
  //   path: '/cart',
  //   component: Cart,
  // },
  {
    id: 10,
    path: '/our-services',
    component: CourseDetails,
  },
];

export const commonRoutes = [
  // {
  //   id: 1,
  //   path: '/privacy-policies',
  //   component: PrivacyPolicies,
  // },
  // {
  //   id: 2,
  //   path: '/terms-of-services',
  //   component: TermsOfServices,
  // },
 
];
