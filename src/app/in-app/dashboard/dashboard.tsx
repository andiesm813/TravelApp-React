import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useGetDestinations, useGetImageSet1, useGetImageSet2, useGetSelectedArticles } from '../../hooks/travel-app-data-hooks';
import styles from './dashboard.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function Dashboard() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const { travelAppDataSelectedArticles } = useGetSelectedArticles();
  const { travelAppDataDestinations } = useGetDestinations();
  const { travelAppDataImageSet1 } = useGetImageSet1();
  const { travelAppDataImageSet2 } = useGetImageSet2();

  return (
    <>
      <div className={classes("row-layout dashboard-container")}>
        <div className={classes("column-layout left-content")}>
          <div className={classes("column-layout header")}>
            <div className={classes("column-layout group")}>
              <h4 className={classes("h4")}>
                <span>Hi, Sarah!</span>
              </h4>
              <p className={classes("typography__subtitle-1 text")}>
                <span>We have some great suggestions for your next travel! We've searched the whole web to provide you with these rare findings - special for you!</span>
              </p>
            </div>
          </div>
          <div className={classes("column-layout bottom-content")}>
            <div className={classes("column-layout latest-articles")}>
              <div className={classes("row-layout group_1")}>
                <h6 className={classes("h6")}>
                  <span>Latest in articles</span>
                </h6>
                <IgrButton variant="outlined" size="large" clicked={() => navigate(`/in-app/articles`)} className={classes("button")}>
                  <span key={uuid()}>view all ARTICLES</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div className={classes("row-layout group_2")}>
                {travelAppDataSelectedArticles?.map((item) => (
                  <IgrCard className={classes("card")} key={uuid()}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src={item.image_url} className={classes("image")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>{item.title}</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>{item.subtitle}</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat">
                          <span className={classes("material-icons")} key={uuid()}>
                            <span key={uuid()}>bookmark_border</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat">
                          <span className={classes("material-icons")} key={uuid()}>
                            <span key={uuid()}>share</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div style={{display: 'contents'}} slot="end" key={uuid()}>
                        <IgrButton variant="outlined" size="large" className={classes("button_1")}>
                          <span key={uuid()}>read</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                ))}
              </div>
            </div>
            <div className={classes("column-layout destinations")}>
              <div className={classes("row-layout group_3")}>
                <h6 className={classes("h6")}>
                  <span>Destinations</span>
                </h6>
                <IgrButton variant="outlined" size="large" className={classes("button")}>
                  <span key={uuid()}>VIEW ALL DESTINATIONS</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div className={classes("row-layout group_2")}>
                {travelAppDataDestinations?.map((item) => (
                  <IgrCard className={classes("card")} key={uuid()}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src={item.image_url} className={classes("image")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>{item.title}</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}> </span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat">
                          <span className={classes("material-icons")} key={uuid()}>
                            <span key={uuid()}>bookmark_border</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat">
                          <span className={classes("material-icons")} key={uuid()}>
                            <span key={uuid()}>share</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div style={{display: 'contents'}} slot="end" key={uuid()}>
                        <IgrButton variant="outlined" size="large" className={classes("button_1")}>
                          <span key={uuid()}>view</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                ))}
              </div>
            </div>
            <div className={classes("column-layout destinations")}>
              <div className={classes("row-layout group_3")}>
                <h6 className={classes("h6")}>
                  <span>My travel lists</span>
                </h6>
                <IgrButton variant="outlined" size="large" className={classes("button")}>
                  <span key={uuid()}>VIEW ALL LISTS</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div className={classes("row-layout group_4")}>
                <div className={classes("column-layout group_5")}>
                  <p className={classes("typography__subtitle-2 text_1")}>
                    <span>USA</span>
                  </p>
                  <IgrList className={classes("list")}>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Grand Canyon</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Las Vegas, NV</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Niagara Falls</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Alaska</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Washington D.C.</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                </div>
                <div className={classes("column-layout group_5")}>
                  <p className={classes("typography__subtitle-2 text_1")}>
                    <span>WORLD</span>
                  </p>
                  <IgrList className={classes("list")}>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Rome, Italy</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Paris, France</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>London, England</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Germany</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Tokio, Japan</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_right</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes("column-layout photos")}>
          <div className={classes("row-layout group_6")}>
            <h6 className={classes("h6")}>
              <span>Photos</span>
            </h6>
            <IgrButton variant="outlined" size="large" className={classes("button")}>
              <span key={uuid()}>GO TO ALBUM</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <div className={classes("column-layout group_7")}>
            <div className={classes("column-layout group_8")}>
              <div className={classes("row-layout group_9")}>
                <div className={classes("row-layout group_10")}>
                  {travelAppDataImageSet1?.map((item) => (
                    <img src={item.image_url} className={classes("image_1")} key={uuid()} />
                  ))}
                  {travelAppDataImageSet2?.map((item) => (
                    <img src={item.image_url} className={classes("image_1")} key={uuid()} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
