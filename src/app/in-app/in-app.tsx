import { IgrAvatar, IgrAvatarModule, IgrIconButton, IgrIconButtonModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './in-app.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrIconButtonModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function InApp() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);

  return (
    <>
      <div className={classes("column-layout in-app-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("row-layout group_1")}>
            <IgrIconButton variant="flat" clicked={() => navDrawer?.current?.toggle()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>menu</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <img src="/src/assets/Travel-App-Color-Logo.svg" className={classes("image")} />
          </div>
          <div className={classes("row-layout group_2")}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>notifications</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <IgrIconButton variant="flat" className={classes("icon-button_1")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar")}></IgrAvatar>
            <p className={classes("typography__body-2 text")}>
              <span>Sarah W.</span>
            </p>
          </div>
        </div>
        <IgrNavDrawer ref={navDrawer} className={classes("nav-drawer")}>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/dashboard`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>dashboard</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Dashboard</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/discover`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>image_search</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Discover</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/travel-lists`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>playlist_add_check</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Travel lists</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/articles`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>chrome_reader_mode</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Articles</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/in-app/faq`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>question_answer</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>FAQ</div>
            </IgrNavDrawerItem>
          </div>
          <IgrNavDrawerItem key={uuid()}>
            <span slot="icon" key={uuid()}>
              <span className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>settings</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </span>
            <div slot="content" key={uuid()}>Settings</div>
          </IgrNavDrawerItem>
        </IgrNavDrawer>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
