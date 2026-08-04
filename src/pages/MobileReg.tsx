import { FC, useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Image, Form, Input, Button } from 'antd-mobile'
import { useNavigate, redirect } from 'react-router-dom'
const MobileLogin: FC = () => {
  const navigator = useNavigate()
  const back = () => navigator(-1)
  const backLogin = () => {
    navigator('/m/login')
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <nav className="bg-white h-11.5 flex w-full flex-row items-center pr-7.5">
        <ChevronLeft className="text-blue-500 ml-4.5" onClick={back} />
        <span className="text-base font-bold ml-auto mr-auto">注册</span>
      </nav>
      <section className="flex items-center flex-col justify-center">
        <Image
          className="object-fill object-center w-37.5 mt-12.5"
          width={150}
          fit={'cover'}
          src="https://h5.jiquyou.com/assets/logo-QlDCCo-I.png"
        />
        <Form layout="horizontal" mode="card">
          <Form.Item name="phone" label="手机号码" rules={[{ required: true }]}>
            <Input placeholder="请输入手机号码" />
          </Form.Item>
          <Form.Item name="phone" label="邮箱地址" rules={[{ required: true }]}>
            <Input placeholder="请输入邮箱地址" />
          </Form.Item>
          <Form.Item label="邮箱验证码" rules={[{ required: true }]} extra={<a>发送验证码</a>}>
            <Input placeholder="输入邮箱验证码" />
          </Form.Item>
          <Form.Item label="登陆密码" rules={[{ required: true }]}>
            <Input placeholder="请输入登陆密码" />
          </Form.Item>
          <Form.Item label="交易密码" name="password" rules={[{ required: true }]}>
            <Input placeholder="请输入交易密码" />
          </Form.Item>
          <Form.Item label="邀请码(可选)">
            <Input placeholder="请输入邀请码" />
          </Form.Item>
        </Form>
        <Button className="mx-4! w-[calc(100%-16px)]!" block shape="rounded" color="success">
          注册账号
        </Button>
        <Button
          onClick={backLogin}
          className="mx-4! my-4! w-[calc(100%-16px)]!"
          block
          shape="rounded"
          color="primary"
        >
          返回登陆
        </Button>
      </section>
    </div>
  )
}

export default MobileLogin
