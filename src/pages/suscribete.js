import React from "react"
import { Layout } from "../components/common"
import SubscribeWidget from "../components/common/SubscribeWidget"

const SubscribePage = () => (
    <>
        <Layout>
            <div className="container">
                <article className="content">
                    <section className="content-body">
                        <SubscribeWidget />
                    </section>
                </article>
            </div>
        </Layout>
        ;
    </>
)

export default SubscribePage
