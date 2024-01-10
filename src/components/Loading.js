import { Spin } from 'antd';
const Loading = () => {
    return (

        <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-50 opacity-50 flex flex-col items-center justify-center">
            <Spin size="large" />
        </div>
    );
};

export default Loading;