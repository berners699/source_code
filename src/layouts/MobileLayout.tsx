import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Image, Form, Input, Button } from 'antd-mobile'
const MobileLayout: FC = () => {
  const navigator = useNavigate()
  const back = () => navigator(-1)
  const [visible, setVisible] = useState(false)
  return (
    <div className="sm:text-2xl md:text-2xl lg:text-4xl xl:text-2xl 2xl:text-3xl">
      <nav className="bg-white h-11.5 flex w-full flex-row items-center pr-7.5">
        <ChevronLeft className="text-blue-500 ml-4.5" onClick={back} />
        <span className="text-base font-bold ml-auto mr-auto">登陆</span>
      </nav>
      <section className="flex items-center flex-col justify-center">
        <Image
          className="object-fill object-center w-37.5 mt-12.5"
          width={150}
          fit={'cover'}
          src="https://h5.jiquyou.com/assets/logo-QlDCCo-I.png"
        />
        <Form layout="horizontal" mode="card">
          <Form.Item label="姓名">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input placeholder="请输入密码" />
          </Form.Item>
          <Form.Item label="短信验证码" extra={<a>发送验证码</a>}>
            <Input placeholder="请输入" />
          </Form.Item>
        </Form>
        <Button className="m-2" block shape="rounded" color="primary">
          登陆
        </Button>
        <Button className="m-2" block shape="rounded" color="success">
          注册
        </Button>
        <Button className="m-2" block shape="rounded" color="success">
          忘记登陆密码
        </Button>
      </section>
    </div>
  )
}

export default MobileLayout
