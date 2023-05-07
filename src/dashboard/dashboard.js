import AppHeader from "../common/components/app-header";
import "./dashboard.scss";

const Dashboard = () => {
    return <div className="dashboard-container">

        <div className="app-header">
            <AppHeader/>
        </div>

        <div className="background-image"></div>

        <div className="row-1 grid-2-cols">
            <div className="flex-box-start flex-col">
                <span>State of the art</span>
                <span>robotics solutions</span>
            </div>
            <div className="flex-box-start flex-col">
                <span className="text-right">Seamless integration</span>
                <span className="text-right">with your existing systems</span>
            </div>
        </div>

        <div className="row-2">
            <div className="grid-2-cols full-width">
                <div className="app-title">ROBO</div>
                <div className="app-title text-right x">X</div>
            </div>
        </div>


        <div className="row-3 grid-2-cols">
            <div className="flex-box-start flex-col">
                <span>Innovative</span>
                <span>Advanced</span>
                <span>Automated</span>
            </div>
            <div className="text-right contact enable-hover">
                Contact <span className="zen">Us</span>
            </div>
        </div>

    </div>
};

export default Dashboard;


// Photo by <a href="https://unsplash.com/@vmxhu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Szabo Viktor</a> on <a href="https://unsplash.com/photos/qw8YAUEbHEE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shubham Dhage</a> on <a href="https://unsplash.com/photos/g_WPAiUc1Us?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/ja/@nuvaproductions?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Javier Miranda</a> on <a href="https://unsplash.com/photos/MrWOCGKFVDg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  