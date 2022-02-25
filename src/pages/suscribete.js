import React from "react"
import { Layout } from "../components/common"
import MailchimpComponent from "../components/common/Mailchimp"

const SubscribePage = () => (
    <>
        <Layout>
            <div className="container">
                <article className="content" style={{ textAlign: `center` }}>
                    <section className="content-body">
                        <MailchimpComponent />
                    </section>
                </article>
            </div>
        </Layout>
        ;
    </>
)

export default SubscribePage
