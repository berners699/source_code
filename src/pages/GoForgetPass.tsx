import { FC, useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Toast, Form, Input, Button } from 'antd-mobile'
import { ExclamationOutline } from 'antd-mobile-icons'
import { useNavigate, redirect } from 'react-router-dom'
const MobileLogin: FC = () => {
  const navigator = useNavigate()
  const back = () => navigator(-1)
  const modifyPass = () => {
    Toast.show({
      icon: <ExclamationOutline />,
      content: '忘记登陆密码',
    })
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <nav className="bg-white h-11.5 flex w-full flex-row items-center pr-7.5">
        <ChevronLeft className="text-blue-500 ml-4.5" onClick={back} />
        <span className="text-base font-bold ml-auto mr-auto">忘记登陆密码</span>
      </nav>
      <div className="text-2xl text-gray-300 my-1 text-left">修改密码</div>
      <section className="flex items-center flex-col justify-center">
        <Form layout="horizontal" mode="card">
          <Form.Item name="phone" label="邮箱地址" rules={[{ required: true }]}>
            <Input placeholder="请输入邮箱地址" />
          </Form.Item>
          <Form.Item label="图片验证码" rules={[{ required: true }]}>
            <Input placeholder="输入图片验证码" />
          </Form.Item>
          <Form.Item label="邮箱验证码" rules={[{ required: true }]} extra={<a>发送验证码</a>}>
            <Input placeholder="输入邮箱验证码" />
          </Form.Item>
          <Form.Item label="设置密码" name="password" rules={[{ required: true }]}>
            <Input placeholder="设置新的密码" />
          </Form.Item>
          <Form.Item label="重新输入" name="password" rules={[{ required: true }]}>
            <Input placeholder="重新输入新的密码" />
          </Form.Item>
        </Form>

        <Button
          onClick={modifyPass}
          className="mx-4! my-4! w-[calc(100%-16px)]!"
          block
          shape="rounded"
          color="primary"
        >
          修改密码
        </Button>
      </section>
    </div>
  )
}

export default MobileLogin
