import { ConnectButton } from '@rainbow-me/rainbowkit';
import "./Nav.css"


const WalletButton = () => {
  return (
    <>
      <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <button
                  onClick={() =>
                    connected ? openAccountModal() : openConnectModal()
                  }
                  className={`butt ${connected ? "connectedbutt":""}`}
                >
                  {connected ? account.displayName : "Connect Wallet"}

                </button>
              );
            }}
          </ConnectButton.Custom>
    </>
  )
}; 

export default WalletButton