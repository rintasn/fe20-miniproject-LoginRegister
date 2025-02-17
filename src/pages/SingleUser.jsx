import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Mail, User } from 'lucide-react';

const SingleUser = () => {

  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  const getUser = (id) => {
    setLoading(true);
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response)
        setLoading(false);
      })
  }

  useEffect(() => {
    getUser(id)
  }, [id])
if (loading) {
    return (
      <div className="min-h-screen bg-[linear-gradient(135deg,_#E8E8E8_0%,_#2E2E2E_100%)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#E8E8E8_0%,_#2E2E2E_100%)] relative">
      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,255,255,0.1),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header with Back Button */}
        <div className="relative backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-6">
              <h1 className="text-3xl font-bold text-white/90">User Profile</h1>
              <Link
                to="/list-user"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 transition-all duration-300"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>

        {user && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Profile Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <img
                      src={user.avatar}
                      alt={`${user.first_name} ${user.last_name}`}
                      className="w-32 h-32 rounded-full object-cover ring-4 ring-white/10"
                    />
                    <h2 className="mt-4 text-2xl font-bold text-white/90">
                      {user.first_name} {user.last_name}
                    </h2>
                    <p className="mt-2 text-white/60">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Details Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white/90 mb-6">Personal Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-white/10">
                        <User className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Full Name</p>
                        <p className="text-white/90">{user.first_name} {user.last_name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-white/10">
                        <Mail className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Email Address</p>
                        <p className="text-white/90">{user.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleUser