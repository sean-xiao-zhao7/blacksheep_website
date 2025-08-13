import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, Link, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsxs("div", { id: "left", children: [
      /* @__PURE__ */ jsx("h2", { children: "LEGAL" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Link, { to: "/terms", children: "TERMS & CONDITIONS" }) }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy", children: "PRIVACY POLICY" }) }),
      /* @__PURE__ */ jsx("p", { children: "© 2025 BLACKSHEEP" })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "right", children: [
      /* @__PURE__ */ jsx("h2", { children: "CONTACT US" }),
      /* @__PURE__ */ jsx("p", { children: "contact.us.blacksheep@gmail.com" })
    ] })
  ] });
}
function MainLayout(props) {
  return /* @__PURE__ */ jsxs("div", { id: "main-layout-container", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("div", { id: "header-banner" }) }),
    props.children,
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(MainLayout, {
        children
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const LearnMorePage = UNSAFE_withComponentProps(function LearnMore() {
  return /* @__PURE__ */ jsxs("div", {
    className: "text-page-container",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Blacksheep Community"
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("p", {
        children: "We all need supportive community."
      }), /* @__PURE__ */ jsx("p", {
        children: "Call, text, or meet with a Christian faith-based community leader in the Mississauga area today."
      }), /* @__PURE__ */ jsx("p", {
        children: "We know it isn't easy meeting people, and the alternative poses just as many problems. Isolation has never helped anyone. Yet, there are tons of communities out there just ready and willing to welcome us, and so many people in search of just that!"
      }), /* @__PURE__ */ jsx("p", {
        children: "Blacksheep is a way to connect with them."
      }), /* @__PURE__ */ jsx("p", {
        children: "We gather the bare minimum of information about you (not even a profile picture!) and connect you to community groups, not based on preference, culture, or any other variable other than 'they're literally right next to you!'"
      }), /* @__PURE__ */ jsx("p", {
        children: "Only after connecting with the first community, if you find that they're not really your cup of tea, only then can you dismiss that community from your search and then the system match you with the next nearest community near you."
      }), /* @__PURE__ */ jsx("p", {
        children: "Instead of a 'swipe left' culture where people give up on you without ever having the chance to actually meet you, this changes the entire game!"
      }), /* @__PURE__ */ jsx("p", {
        children: "But we're not a dating app, we're simply giving you an introduction to new people. The possibilities of what could happen"
      }), /* @__PURE__ */ jsx("p", {
        children: "Coming Soon!"
      })]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LearnMorePage
}, Symbol.toStringTag, { value: "Module" }));
const PluralityInBiblicalOnenessPage = UNSAFE_withComponentProps(function PluralityInBiblicalOnenessPage2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "text-page-container",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Plurality in Biblical Oneness"
    }), /* @__PURE__ */ jsx("div", {
      className: "img-container",
      children: /* @__PURE__ */ jsx("img", {
        src: "/public/assets/images/plurality_in_biblical_oneness.png",
        alt: "mercy"
      })
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("p", {
        children: "I want to show you something awesome today that I believe is often overlooked in Scripture:"
      }), /* @__PURE__ */ jsxs("div", {
        className: "align-right",
        children: [/* @__PURE__ */ jsx("p", {
          children: "My sheep (plurality in oneness) listen to my voice; I know them (plurality in oneness), and they (plurality in oneness) follow me. I give them (plurality in oneness) eternal life, and they (plurality in oneness) shall never perish; no one will snatch them (plurality in oneness) out of my hand. My Father, who has given them (plurality in oneness) to me, is greater than all; no one can snatch them (plurality in oneness) out of my Father’s hand. I and the Father are one” (plurality in oneness)."
        }), /* @__PURE__ */ jsx("p", {
          children: "Again, his Jewish opponents (plurality in oneness) picked up stones to stone him, but Jesus said to them, (plurality in oneness) “I have shown you many good works (plurality of action) from the Father. (Plurality of source: Jesus along with His Father) For which of these do you stone me?”"
        }), /* @__PURE__ */ jsx("p", {
          children: "“We (plurality in oneness) are not stoning you for any good work,” they (plurality in oneness) replied, “but for blasphemy, because you, a mere man, claim to be God.” (for suggesting plurality in God’s oneness with himself)."
        }), /* @__PURE__ */ jsx("p", {
          children: "Jesus answered them, (plurality in oneness) “Is it not written in your (plurality in oneness) Law, ‘I have said you (altogether: plurality in oneness) are “gods”’? (plurality in oneness) If he called them (plurality in oneness) ‘gods,’ (plurality in oneness) to whom the word of God came—and Scripture cannot be set aside— what about the one whom the Father set apart as his very own and sent into the world? (suggesting plurality in oneness with God and himself.) Why then do you (plurality in oneness) accuse me of blasphemy because I said, ‘I am God’s Son’? (For suggesting plurality of God with himself)."
        }), /* @__PURE__ */ jsx("p", {
          children: "Do not believe me unless I do the works of my Father. (plurality of oneness in action) But if I do them (plurality in actions), even though you (plurality in oneness) do not believe me, (and His plurality in oneness) believe the works (plurality in actions), that you may know and understand that the Father is in me, and I in the Father.” (plurality in oneness)"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "John 10:27-38"
      }), /* @__PURE__ */ jsx("p", {
        children: "I recently met a man who thought that the only god that existed in this lifetime was himself. What’s worse, he thought this belief was biblical from the few out-of-context verses he rattled off."
      }), /* @__PURE__ */ jsx("p", {
        children: "I felt sympathy for his misunderstanding – not out of pity for his beliefs, but because of what his entire belief system is bound to entail for his life."
      }), /* @__PURE__ */ jsx("p", {
        children: "He described no need to be part of a fellowship of believers (I say “fellowship of believers” because the action of attending “church” today can still be carried out with singularity of intent; i.e attending and not connecting with other believers in any deeper more vulnerable way, singular in intent to go ‘offer my attendance to God and leave’, and with no missional focus on sharing our faith with others, etc)."
      }), /* @__PURE__ */ jsx("p", {
        children: "It appears that when we get the triune nature of God incorrect, it inevitably leads to getting several other things wrong about God’s intent for our lives."
      }), /* @__PURE__ */ jsx("p", {
        children: "God is not revealed to us in Scripture as ‘One’ in the sense of singularity. He is, and always has been, ‘three in one’ – Father, Son, and Spirit – altogether divinely as One God. It’s not an easy concept to comprehend, just like we can find coming together in our own families and communities often challenging, but our best reflection of His image is when we learn to walk in healthy community."
      }), /* @__PURE__ */ jsx("p", {
        children: "And we seem to somewhat already know this truth by nature."
      }), /* @__PURE__ */ jsx("p", {
        children: "It’s the reason why people not only come from families, but then ascend to having families of their own. But imagine the awful mess we can make of even something so sacred as family if we fail to have a right understanding and reflection of what we ought to aspire to if we don’t have a clear example of what it should look like."
      }), /* @__PURE__ */ jsx("p", {
        children: "Triunity is apparent in everything that also springs from this very framework like neighborhoods, communities, cities, countries, and in the world at large."
      }), /* @__PURE__ */ jsx("p", {
        children: "It’s inherent not only in our very pursuit for family, but also seen even through the friendships we pursue – our ‘family of choice’."
      }), /* @__PURE__ */ jsx("p", {
        children: "Even those who have experienced brokenness in their familial or friendship relationships don’t often cast off all people altogether but instead have very specific standards for the sort of people they will choose to engage with."
      }), /* @__PURE__ */ jsx("p", {
        children: "In fact, I’d even go so far as to say that the real plight of the homeless and beggarly is not that they need our money or financial generosity (even though both of us – asker and giver – might arrive at this shortsighted yet albeit necessary conclusion), the real downfall of their destitution is a circumstance, whether mental, physical, or spiritual, in their inability to be part of – or sustain – healthy community, whether due to a lack of access or personal desire (through hurts, poor habits, or unhealthy hangups)"
      }), /* @__PURE__ */ jsx("p", {
        children: "So, how does knowing that God Himself is a perfect community change the way we view our own identities and the focus of our missional intent?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Well, for starters, we might begin to see God’s desire for our churches to be more devotedly involved in reaching those who lack a healthy, supportive community, whether or not they can properly assess the value in it correctly or not."
      }), /* @__PURE__ */ jsx("p", {
        children: "We might also begin to see the unthoughtful fruitlessness of entire fellowships who set out to lead a flock while only engaging in a missional focus one week out of the year."
      }), /* @__PURE__ */ jsx("p", {
        children: "Imagine if our experience of God was only a once-a-year event in our lives, and then never again until we went to be with Him in eternity? Do you think any of us could endure in this journey?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Or worst, what if we never knew of or developed a lens for beholding the loving faithfulness of a God who not only so highly values community, but tells us, _”wherever two or three of us are gathered in His name, I am there in your midst”?_ – Matt 18:20. Would you still even see any value in meeting with others for this purpose?"
      }), /* @__PURE__ */ jsx("p", {
        children: "It really changes the perceptions we might have of believing that we can connect with the marginalized once a year or every few months, and only from a safe enough distance so as to not really take upon our own shoulders the burdens of those who are desperately in need, (Gal 6:2) and believe ourselves to be agents of real transformative change."
      }), /* @__PURE__ */ jsx("p", {
        children: "I don’t say this at all to condemn anyone’s walk, but instead to challenge us to see that every time we profess to want to see, _’God’s kingdom come; on Earth as it is in heaven’_ this is a very foundational tenet of what we’re professing: that we would like to see the kind of love that makes for God’s eternal triune community in heaven to be made manifest here on Earth, and by so doing, we’d experience something of the majesty of heaven right here, right now."
      }), /* @__PURE__ */ jsx("p", {
        children: "Of course, this takes wisdom, prayer, understanding, and personal growth, and God knows this. That’s why He’s welcomes us into ‘His’ holy triune community with Himself and others through the shedding of Jesus blood for our sins, reconciling us to God, and offering to us grace (undeserved favour), and forgiveness (the pardoning of our imperfections), and a love that none of us has done anything to deserve."
      }), /* @__PURE__ */ jsx("p", {
        children: "This very experience is the catalyst that should drive us onward towards those whom we do not believe deserve it, who even at times do the very things to hinder and offend it – like we do – and yet, He’s never given up on us."
      }), /* @__PURE__ */ jsx("p", {
        children: "So, I challenge you that as you reflect on the nature of what God’s holy eternal triune community might look like, that from the outflow of that revelation, it leads us all to be just a little bit more characteristic of the ambassadors we were called and created to be."
      }), /* @__PURE__ */ jsx("p", {
        children: "Is it any wonder why I can’t seem to cease from imploring you to get connected to healthy loving community today!"
      })]
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PluralityInBiblicalOnenessPage
}, Symbol.toStringTag, { value: "Module" }));
const ArtOfStoryTellingPage = UNSAFE_withComponentProps(function ArtOfStoryTellingPage2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "text-page-container",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Art Of Story Telling"
    }), /* @__PURE__ */ jsx("div", {
      className: "img-container",
      children: /* @__PURE__ */ jsx("img", {
        src: "/public/assets/images/the_art_of_storytelling2.png",
        alt: "oneness"
      })
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("p", {
        children: "To every story, there are five main structural features that every reader is guided through so that when you arrive at the end of the story – if the story is told well – it leaves you with an understanding of all that it carefully and masterfully has woven together as it directs you through the journey."
      }), /* @__PURE__ */ jsx("p", {
        children: "Those five elements are listed here:"
      }), /* @__PURE__ */ jsx("p", {
        children: "- Exposition"
      }), /* @__PURE__ */ jsx("p", {
        children: "- Rising Action"
      }), /* @__PURE__ */ jsx("p", {
        children: "- Climax"
      }), /* @__PURE__ */ jsx("p", {
        children: "- Falling Action"
      }), /* @__PURE__ */ jsx("p", {
        children: "- Resolution (or Denouement)"
      }), /* @__PURE__ */ jsx("p", {
        children: "Unfortunately, when many are handed a Bible, it’s the one book in the world where the rules for reading a story seem to get disregarded in the most peculiar of ways."
      }), /* @__PURE__ */ jsx("p", {
        children: "Some read it like a “magic” book, opening to pages at random and hoping to hear God’s manifold wisdom speak to them in their decision-making for life choices, kind of like a magic eight ball. Others choose to focus in on only one verse, one chapter, and even have ‘favourites’ that they stick to reading repetitively throughout their entire faith journey. But imagine if you were to read any other book in this way, just how lost and confused you would be even though you might go through life feeling quite confident that you understood or could even explain the story to others? I just recently watched the new John Wick movie in theatres. For those who are aware of it, you probably already know that this is the fourth chapter in the story just recently released. In planning a group trip to see the movie this week, one of my friends was unable to make it out with us. When I later spoke with him the next day, he mentioned that Chapter Four was the first part he was going to see."
      }), /* @__PURE__ */ jsx("p", {
        children: "I immediately stopped him and told him that if he hadn’t seen the first three chapters, although he might get a thrill from the action scenes and find entertainment in the movie in general, he would be unable to understand the greater theme of all that was taking place, and most importantly, why. This is the same reason why reading the Bible in parcelled out portions leaves so many to feel disconnected. They read one book of the Bible where they see the mention of Jesus healing and the authority He gives to those who follow Him to also perform the same in His Name, but then they miss some crucial information in another book where the church elders give an almost legal fine print parentheses, mentioning that, “if you fail to honor your wife, your prayers would be hindered.” And that’s just one of hundreds of ‘fine print’ clauses to understanding, explaining, and then living out the liberty we have in Christ in a functional way in this world."
      }), /* @__PURE__ */ jsx("p", {
        children: "So, what is the story told in Scripture?"
      }), /* @__PURE__ */ jsx("p", {
        children: "EXPOSITION:"
      }), /* @__PURE__ */ jsx("p", {
        children: "The opening five books of the Bible, often referred to as the Torah or, “The Law,” are where some of the most foundational elements of the overall story are revealed. It’s here that we learn:"
      }), /* @__PURE__ */ jsxs("p", {
        children: ["- That God created everything", /* @__PURE__ */ jsx("br", {}), "- That God is a person and can be communicated with as such", /* @__PURE__ */ jsx("br", {}), "- That God created us in His image (though we’re not quite told what that even means just yet)", /* @__PURE__ */ jsx("br", {}), "- God’s intention for humanity", /* @__PURE__ */ jsx("br", {}), "- The liberty that Freewill grants us, and the pivotal role it plays in godly love", /* @__PURE__ */ jsx("br", {}), "- The detriment of self-government", /* @__PURE__ */ jsx("br", {}), "- The fact that we have an enemy who craftily leads us astray from God’s intention", /* @__PURE__ */ jsx("br", {}), "- God’s promise", /* @__PURE__ */ jsx("br", {}), "- The repercussions of sin on a fallen humanity", /* @__PURE__ */ jsx("br", {}), "- God’s solution to our self-inflicted problem", /* @__PURE__ */ jsx("br", {}), "- God’s sovereignty over human affairs and foreknowledge of our outcomes even before we know what to do with it all."]
      }), /* @__PURE__ */ jsx("p", {
        children: "And most of that is uncovered in just the first three chapters of Genesis! (Whereas the Torah consists of the entirety of the first five books of the Bible: Genesis, Exodus, Leviticus, Numbers, & Deuteronomy) A part of the Torah is also the commandments. Most are familiar with these, but even the Commandments disconnected from the whole story leads many to live out a very confused profession of faith."
      }), /* @__PURE__ */ jsx("p", {
        children: "RISING ACTION"
      }), /* @__PURE__ */ jsx("p", {
        children: "Fast forward to the next historical “chapter” in humanity’s story, and we begin to behold the children of Israel, equipped with God’s law now entering into the Promised Land and what ought to have been the “glory days” of God’s chosen people, right?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Wrong."
      }), /* @__PURE__ */ jsx("p", {
        children: "We would slowly but gradually learn over a timeline spanning more than 1000 years (and still today unfortunately) that whether through prophet, priest, or king, humanity seems to continue to demonstrate every despicable act known to mankind right from chapter four of Genesis onward:"
      }), /* @__PURE__ */ jsxs("p", {
        children: ["Murder", /* @__PURE__ */ jsx("br", {}), "Greed", /* @__PURE__ */ jsx("br", {}), "Lust", /* @__PURE__ */ jsx("br", {}), "Envy", /* @__PURE__ */ jsx("br", {}), "Pride", /* @__PURE__ */ jsx("br", {}), "Arrogance", /* @__PURE__ */ jsx("br", {}), "Sexual immorality", /* @__PURE__ */ jsx("br", {}), "Hatred", /* @__PURE__ */ jsx("br", {}), "Superiority", /* @__PURE__ */ jsx("br", {}), "Narcissism", /* @__PURE__ */ jsx("br", {}), "Selfishness", /* @__PURE__ */ jsx("br", {}), "Bigotry…"]
      }), /* @__PURE__ */ jsx("p", {
        children: "The list goes on considerably. But all the while, a continuing promise weaves in and out of every book, providing some silver lining of hope that something better is coming for those who hold fast to His promise."
      }), /* @__PURE__ */ jsx("p", {
        children: "CLIMAX"
      }), /* @__PURE__ */ jsx("p", {
        children: "Then, two thousand years ago, something out of the ordinary happens… A child is born. His origins: supernatural intertwined with the natural… A virgin gives birth."
      }), /* @__PURE__ */ jsx("p", {
        children: "And indeed, this is no ordinary child. For it’s been said of Him that if all the stories were ever written down regarding everything He said and did, there would never be enough books in the world to contain them… a serious admonition to those bent on regurgitating inane Christian clichés. This child grows in the natural course of things to a man, who at the age of thirty begins attending to what He dubbed, “His Father’s business” since childhood, but now with fierce veracity. The miracles can’t be understated, even if we’ve grown so accustomed to hearing about them that they’ve somehow lost their ability to excite the imagination anymore. – He healed a man blind from birth and caused him to see… Before I begin listing the rest and become one guilty of my own lack of awe, let me say that again in another way. Your friend has a child. That child is born blind. Everyone in your family and community knows or has heard of this. Some have even met him. You grew up watching him stumble as a child; trip and lean on others as a teenager; and then led by a white cain as an adult. Watching him feel around for his way through life has become somewhat commonplace to you. Day after day, week after week, year after year, and then decade after decade, you witnessed this, then somehow, as his path intersects with the One they call Jesus. He arrives home – this man you’ve grown accustomed, even familiar with, arrives home with His full sight restored nearing forty years old!"
      }), /* @__PURE__ */ jsx("p", {
        children: "What would you feel? What would you think? How would that challenge what you always believed to be true? Think about this carefully so as to not gloss over these next points too expediently:"
      }), /* @__PURE__ */ jsx("p", {
        children: /* @__PURE__ */ jsxs("ul", {
          children: [/* @__PURE__ */ jsx("li", {
            children: "He turned water into wine"
          }), /* @__PURE__ */ jsx("li", {
            children: "With a word he healed a soldiers servant over 50 kms away"
          }), /* @__PURE__ */ jsx("li", {
            children: "He drove seven demonic spirits out of a woman"
          }), /* @__PURE__ */ jsx("li", {
            children: "He drove thousands of demonic spirits out of one man and restored what we would call today a lunatic, back to a sane functioning life"
          }), /* @__PURE__ */ jsx("li", {
            children: "He raised a man from the dead, even after he was buried in a tomb for days"
          }), /* @__PURE__ */ jsx("li", {
            children: "He walked on water"
          }), /* @__PURE__ */ jsx("li", {
            children: "He healed people with incurable diseases by simply touching them"
          }), /* @__PURE__ */ jsx("li", {
            children: "He told a storm to stop – and it stopped!"
          }), /* @__PURE__ */ jsx("li", {
            children: "He caused a paraplegic to find functionality in his arms and legs"
          }), /* @__PURE__ */ jsx("li", {
            children: "He caused a man born with a stub for an arm to grow a fully functioning arm."
          })]
        })
      }), /* @__PURE__ */ jsx("p", {
        children: "And, in an almost anticlimactic act of someone with this resume of supernatural wonder, he allows Himself to be taken, beaten, tortured, and killed… on a cross."
      }), /* @__PURE__ */ jsx("p", {
        children: "FALLING ACTION "
      }), /* @__PURE__ */ jsx("p", {
        children: "His followers? Fled. His life story, probably soon to become myth for those a generation or two (muchless two millenia) separated from these historical events. His cause? Misunderstood at best. Downright disbelieved, ridiculed, and insulted at worst. The vast majority return to ‘life as normal’ and even his followers are uncertain what to make of it all. Dinner parties are held, birthdays celebrated, ambitions pursued, possessions acquired, all with little or no thought of what it all meant, or what it was all for, or what it all accomplished. Conjectures form as they always do. But those speculations are very short lived… Three days later."
      }), /* @__PURE__ */ jsx("p", {
        children: "RESOLUTION"
      }), /* @__PURE__ */ jsx("p", {
        children: "Jesus is seen alive once again! Walking, talking, and live in the flesh! His tomb where he was buried: empty. His body? Never recovered even until today. (How could it?) The Holy Spirit of God begins to pour out over the world as we know it, starting with His followers. Most people easily seem to understand the concept that a demonic spirit can make a person do evil things… Few, however, seem to understand what the Holy Spirit of God in a person can do or does! God begins sharing a revelation of all that His death accomplishes by giving His Holy Spirit to the early believers. All of a sudden, believers are performing the very miracles He once did! A man who couldn’t walk: walks! But not by the direct touch of Jesus – instead by the touch of one of His followers. A girl with a demonic spirit finds freedom and deliverance through another disciple from an evil spirit, and her inner tortures cease. A misguided understanding of all the Holy books that make up the Old Testament today, which were the same books relied upon for so long by religious leaders everywhere, but who never understood what it pointed to in Jesus as the Messiah are finally starting to be understood…"
      }), /* @__PURE__ */ jsx("p", {
        children: "It’s summary?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Jesus came to this earth to fulfill His promise to Adam – the first man – that had been carefully and purposefully concealed right up to the divinely timed moment when He would fulfill it all through His life, death, and resurrection! He begins to show believers Himself in every book of the Bible starting from Genesis:"
      }), /* @__PURE__ */ jsxs("p", {
        children: ["- the coats of fur that covered man’s shame in the Garden", /* @__PURE__ */ jsx("br", {}), "- the son who was about to be offered up by Abraham on the mountain, but stopped at the last moment by an angel", /* @__PURE__ */ jsx("br", {}), "- the blood that was used to cover the doorposts so that the Angel of Death would “pass over” their homes", /* @__PURE__ */ jsx("br", {}), "- the bronze snake that Moses lifted up in the wilderness", /* @__PURE__ */ jsx("br", {}), "- the reason for the preservation of the lineage of the Israelite from which the “Lion of the Tribe of Judah” would descend", /* @__PURE__ */ jsx("br", {}), "- the preservation of the Scriptures that work as a mirror as they reflect the awful truth of our own sin infected condition and their subsequent shortcomings in us…"]
      }), /* @__PURE__ */ jsx("p", {
        children: "And for the “coup de gras”, the promised Messiah revealed in all His glory – yes, indeed as a conquering King – but not the kind of our own imaginations, but rather of the order of a suffering servant sent by God to set all of those who believe, free! Sixty-six books, all carefully arranged. Each one building chapter upon chapter, verse upon verse, to the great hope in all that we’ve ever truly longed to know… about our Creator… about ‘us’ as a creation… about His great purpose and intention for our lives. But most of all… of the heights, and width, and breadth of a love far too profound to be told about in one sitting… In fact, even in one lifetime!"
      }), /* @__PURE__ */ jsx("p", {
        children: "So, although there might be many reasons culturally, ideologically, and even historically for celebrating to goodness of Good Friday each year, if we fail to comprehend the “full story” for the immeasurable gift given to humanity on this day and how He has the power not only to restore a right relationship between man and God, but also between mankind, one to another, then we have also failed to comprehend love – the most truest essence of His divinely orchestrated expression of love – and the fullness of what it truly means. I pray that you find meaningful connection to others who are willing to walk with you in this journey."
      })]
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ArtOfStoryTellingPage
}, Symbol.toStringTag, { value: "Module" }));
const ACommentaryOnMercyPage = UNSAFE_withComponentProps(function ACommentaryOnMercyPage2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "text-page-container",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "A Commentary on Mercy"
    }), /* @__PURE__ */ jsx("div", {
      className: "img-container",
      children: /* @__PURE__ */ jsx("img", {
        src: "/public/assets/images/commentary_on_mercy.jpg",
        alt: "art"
      })
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("p", {
        children: "In the Scriptures, Jesus’ teachings are narrated by stories, some of which are told using parables, and others that use real-life events."
      }), /* @__PURE__ */ jsx("p", {
        children: "For example, when Jesus references Adam and Eve, He speaks of them as people who actually existed and whose lives have implications for us all. He treats the historical starting point of mankind with Adam and Eve as a very significant reference point to understanding God’s intention in His design for us."
      }), /* @__PURE__ */ jsx("p", {
        children: "In other instances, He speaks figuratively, using the imagery of something well-known to a largely agricultural population two thousand years ago of a sheep and a Shepherd that instead draws a parallel for us to understand the heart and mind of God."
      }), /* @__PURE__ */ jsx("p", {
        children: "Interestingly enough, when the disciples recount the story below of the man who Jesus healed of many demons, they are speaking of a literal deliverance from demons."
      }), /* @__PURE__ */ jsx("p", {
        children: "However, as we unpack the lessons that can be taken by recounting this true life event that occurred, we will see lessons that can be taken from both a literal and figurative interpretation of the account."
      }), /* @__PURE__ */ jsx("p", {
        children: "As I unpack the story below, I’ve added a personal commentary in bold in the hope of lending greater insights into this well-known account."
      }), /* @__PURE__ */ jsx("p", {
        children: "MARK 5:1-20"
      }), /* @__PURE__ */ jsxs("p", {
        children: ["They went across the lake to the region of the Gerasenes. When Jesus got out of the boat, a man with an impure spirit came from the tombs to meet him.", /* @__PURE__ */ jsx("br", {}), "Mark 5:1-2"]
      }), /* @__PURE__ */ jsx("p", {
        children: "In most people’s perception of demons today, since demons are the antithesis of who Jesus is, we seem to expect that demons would not reside in the same place as Jesus or the Spirit-filled believer. But this account opens with a demonized man running ‘toward’ Jesus."
      }), /* @__PURE__ */ jsx("p", {
        children: "There are some who see demons in everything – possibly a telltale sign of those who maybe see nothing at all. And yet, there are others who are hurt in this life by not acknowledging spiritual realm at all - which is especially interesting for professors of faith since the spiritual Being that we claim to believe in: “God”, is Spirit. (John 4:24)"
      }), /* @__PURE__ */ jsx("p", {
        children: "But even spiritual beings differ greatly as ‘created beings’ from the Creator to whom there is no equal. It can be additionally harmful to our theological framings to give Satan or any other spiritual being – whether angel or demon (fallen angel) – equal standing with the one and only Creator of both the material and nonmaterial world."
      }), /* @__PURE__ */ jsx("p", {
        children: "This man lived in the tombs, and no one could bind him anymore, not even with a chain. For he had often been chained hand and foot, but he tore the chains apart and broke the irons on his feet. No one was strong enough to subdue him. Mark 5:3-4"
      }), /* @__PURE__ */ jsx("p", {
        children: "The demonized man is characterized by one who “casts off restrains”. This makes it especially worth consideration when we see many both in and outside of the church define our freedom in a similar fashion as the demonized man."
      }), /* @__PURE__ */ jsx("p", {
        children: "Today, our culture heavily enforces the idea that the greatest “freedom of expression” is to cast off or redefine altogether ideas of gender, what constitutes a family, or what even constitutes marriage before God as ‘antiquated notions’."
      }), /* @__PURE__ */ jsx("p", {
        children: "Night and day among the tombs and in the hills he (the demonized man) would cry out and cut himself with stones. Mark 5:5"
      }), /* @__PURE__ */ jsx("p", {
        children: "In a world where each generation is slowly moving further away from real-life human connection to instead embracing a digital community made up of artificial intelligence, I imagine these cries are going to become more faint to the human ear. But even now we can still hear the cries of those who continue to inflict pain upon themselves that we know in-person as we seek our own kinds of solutions to our problems – and cry out – but where our solution fixes nothing, and yet we return to it again and again."
      }), /* @__PURE__ */ jsx("p", {
        children: "This is exemplified when we use alcohol as a means of escape (speaking not to alcohol consumption as a whole but for this very specific end)."
      }), /* @__PURE__ */ jsx("p", {
        children: "Or when we rely on a variety of different drugs to attend to the deeper and more crucial healing that we no longer believe is possible because the inadequately prepared community that surrounds us no longer – or possibly never has – offered any true insight or compassion in helping us to address. (Not to mention our own battle with pride or mistrust that keeps us from acknowledging or receiving support from our greater community)."
      }), /* @__PURE__ */ jsx("p", {
        children: "There are many hearts that are not deferential to the humility required to support the freedom we profess to be seeking, and not every cry (as we’ll soon learn in this story) is a cry for help or even an understanding of where that help can found."
      }), /* @__PURE__ */ jsx("p", {
        children: "When he saw Jesus from a distance, he ran and fell on his knees in front of him. He shouted at the top of his voice, “What do you want with me, Jesus, Son of the Most High God? In God’s name don’t torture me!” Mark 5:6-7"
      }), /* @__PURE__ */ jsx("p", {
        children: "A significant question that merits deep reflection arises from this encounter: who is speaking? The man? Or the demon?"
      }), /* @__PURE__ */ jsx("p", {
        children: "If you answered: it’s the man, then you might be left with some serious doubts of whether or not Jesus is trustworthy as the man appears to be absolutely terrified of being tortured by Jesus."
      }), /* @__PURE__ */ jsx("p", {
        children: "If you answered that it must then be the demon, then you’ll have some equally concerning things to reconcile about whose feet he used to run to Jesus and fall down before him and even whose mouth he used to speak the words, “don’t torture me!”"
      }), /* @__PURE__ */ jsx("p", {
        children: "But what if it’s both? What if a more accurate definition of what we’re seeing in a demonized human being is actually a human who believes the lies the demon has whispered in our ear as thoughts that came from our very own mind?"
      }), /* @__PURE__ */ jsx("p", {
        children: "This last position then makes sense of what the believer is instructed to do in “taking every thought captive,” or even to be, “transformed by the renewing of the mind.”"
      }), /* @__PURE__ */ jsx("p", {
        children: "Essentially, what we think matters! Whether it regards our thoughts about ourselves, our thoughts about others, or even our thoughts about entire institutions like marriage. What we believe has major implications towards how we will ultimately perceive what is truly true – even when He’s standing right in front of us."
      }), /* @__PURE__ */ jsx("p", {
        children: "But that also suggests that we have to be willing to grow our awareness of who we actually are. Like, what if I told you that you were actually “Holy”?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Does that make you uncomfortable?"
      }), /* @__PURE__ */ jsx("p", {
        children: "If it does, it only means that maybe it’s time to extend our understanding of what it actually means to be ‘Holy’ in a Biblical paradigm."
      }), /* @__PURE__ */ jsx("p", {
        children: "For Jesus had said to him, “Come out of this man, you impure spirit!”"
      }), /* @__PURE__ */ jsx("p", {
        children: "Then Jesus asked him, “What is your name?”"
      }), /* @__PURE__ */ jsx("p", {
        children: "“My name is Legion,” he replied, “for we are many.” Mark 5:8-10"
      }), /* @__PURE__ */ jsx("p", {
        children: "Just as Adam hid from God after eating of the fruit – unable to properly perceive the love, mercy, compassion of God, or his relationship to God any longer due to sins entrance into the world as God approaches him in the Garden of Eden, so the demonized man hides, completely enveloped in this new pseudo-self of the long-established counterfeit identity he has accepted. A far departure from who he was created in the image of God to be. Part of so identifying with his oppressors for so long, he’s now no longer even able to clearly discern his unique self from the impure spirit and begins to answer in the identity of the demons instead."
      }), /* @__PURE__ */ jsx("p", {
        children: "And he begged Jesus again and again not to send them out of the area. Mark 5:10"
      }), /* @__PURE__ */ jsx("p", {
        children: "“He” asked Jesus, not to send “them.”"
      }), /* @__PURE__ */ jsx("p", {
        children: "Imagine reaching such a place in life where you’ve come to so identify with your demons that you’re actually the one fighting to not have them leave you?"
      }), /* @__PURE__ */ jsx("p", {
        children: "But wait, how many of us hurt ourselves or our relationship to others over something that we are unwilling to give up today?"
      }), /* @__PURE__ */ jsx("p", {
        children: "In fact, we go one step further and even fight to defend the very thing that’s been oppressing us, unwilling to let go of it even though it’s clear that it has brought us more hurt than hope."
      }), /* @__PURE__ */ jsx("p", {
        children: "Is this demonized man really such an extreme or different case from any one of us who fights to keep gambling even though we’ve bankrupted ourselves or our family?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Or fights for the freedom to drink even though it continues to result in dysfunctional expressions or outright altercations with our friends and family whom we claim to love?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Or how many of us continue to cling to our pride even when it separates us from community?"
      }), /* @__PURE__ */ jsx("p", {
        children: "A large herd of pigs was feeding on the nearby hillside. The demons begged Jesus, “Send us among the pigs; allow us to go into them.” He gave them permission, and the impure spirits came out and went into the pigs. Mark 5:11-13"
      }), /* @__PURE__ */ jsx("p", {
        children: "It’s interesting to see that the demons decided that in being forced to leave the man by the authority of Jesus, the story depicted to ancient Jewish readers the desire of the demons to go into an animal that Jews would regard as “unclean” under the Mosaic Law. I’m certain that this was not unintentional as no portion of Scripture ever tends to be within its historical context."
      }), /* @__PURE__ */ jsx("p", {
        children: "The Scripture is definitely trying to communicate something about the spiritual nature of demons for us today."
      }), /* @__PURE__ */ jsx("p", {
        children: "Did you happen to catch the fact that the pigs were gathered in a herd, but the English word used by translators is ‘was’ not ‘were’ - the first person singular present indicative?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Is it possible that rather than merely intending to highlight the literal contextual interpretation of the historical account which did relate to actual pigs, the Holy Spirit is attempting to draw our attention to something greater? Maybe it’s highlighting that the general unclean community wherein demonic spirits commune is viewed as one and the same on the pathway to death?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Because by all accounts, I’ve never seen anyone give a reasonable explanation otherwise other than the generic answer for what happens next:"
      }), /* @__PURE__ */ jsx("p", {
        children: "The herd, about two thousand in number, rushed down the steep bank into the lake and were drowned. Mark 5:13"
      }), /* @__PURE__ */ jsx("p", {
        children: "Sure, we’re told that Satan came to “steal, kill, and destroy”, but this event appears to be highlighting to us that to follow demons in their rejection of Jesus is one and the same fate: eternal death; spiritual self-harm."
      }), /* @__PURE__ */ jsx("p", {
        children: "Because we, too, were an unholy and unclean thing before accepting God’s grace. But how many people have the kind of insight into their own moral character that allows them to actually identify with the pigs; a necessity in recognizing our need for a Savior?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Those tending the pigs ran off and reported this in the town and countryside, and the people went out to see what had happened. When they came to Jesus, they saw the man who had been possessed by the legion of demons, sitting there, dressed and in his right mind; and they were afraid. Those who had seen it told the people what had happened to the demon-possessed man—and told about the pigs as well. Mark 5:14-16"
      }), /* @__PURE__ */ jsx("p", {
        children: "This is why we see that in going to the larger community it was not only pertinent to testify of the salvation that came to the once demonized man, but to also mention what happened to the pigs."
      }), /* @__PURE__ */ jsx("p", {
        children: "Every even seemingly unimportant mention of what Jesus says and does has incredible significance in what he didn’t always overtly state or fixate upon in His ministry. In fact, the Scriptures often record how much more Jesus wanted to teach us that we were just unable to hear, but as we read through the rest of the New Testament, we quickly learn that the early church leaders didn’t often shy away from such topics."
      }), /* @__PURE__ */ jsx("p", {
        children: "Then the people began to plead with Jesus to leave their region. Mark 5:17"
      }), /* @__PURE__ */ jsx("p", {
        children: "This has got to be one of the saddest verses in the Bible that highlights the level of isolation our Savior had to contend with in His mission here to Earth."
      }), /* @__PURE__ */ jsx("p", {
        children: "It appears that no amount of individual healing towards those who are most deeply affected in our communities will ever be as significant to some as preserving our own self-interests in pushing Jesus away."
      }), /* @__PURE__ */ jsx("p", {
        children: "Whether financial, political, cultural, or otherwise, rather than rejoicing at the things God has done, our nearsightedness keeps us focused on our own priorities while claiming a desire to encounter the supernatural."
      }), /* @__PURE__ */ jsx("p", {
        children: "Maybe we too have experienced miracles too often to count, but it just wasn’t relevant to our own interests at the time."
      }), /* @__PURE__ */ jsx("p", {
        children: "The loss of the herd was a great financial loss to a community that depends upon it for their livelihood. But this highlights to us that the cost of trusting Jesus is no little thing."
      }), /* @__PURE__ */ jsx("p", {
        children: "As Jesus was getting into the boat, the man who had been demon-possessed begged to go with him. Jesus did not let him, but said, “Go home to your own people and tell them how much the Lord has done for you, and how he has had mercy on you.” So the man went away and began to tell in the Decapolis how much Jesus had done for him. And all the people were amazed._ Mark 5:18-20"
      }), /* @__PURE__ */ jsx("p", {
        children: "Though we may not be given the authority to follow Jesus to all of the places where He goes, just like the man was left behind to give a testimony of God’s mercy until He returns, maybe we’ve also been called to influence the social circles to which we currently belong. And sometimes, that doesn’t need to be anything more than being faithful to recount all of the ways He has been good to each of us personally so that the next generation and those who are currently seeking might hear the valuable testimony of someone who was personally met with His mercy and kindness, and to know that it is indeed possible to see Him in our lifetime."
      }), /* @__PURE__ */ jsx("p", {
        children: "The disciples were not all polished or professional orators like the Apostle Paul. Some of them were merely men and women who could testify, “the God who provides has provided for me”, or “’God my Protector’ is the reason I’m still here”, or “the merciful God – the God who sees me has looked upon my situation with mercy”, and faithful shall you be called in the kingdom of light."
      }), /* @__PURE__ */ jsx("p", {
        children: "Because all of these things ultimately echo the heart of the Gospel – and the kind of God who would willingly suffer to see us set free from our sentence to the death we all rightly deserved."
      }), /* @__PURE__ */ jsx("p", {
        children: "The Scriptures teach us time and time again that it’s the “goodness of God that leads mankind to repentance”."
      }), /* @__PURE__ */ jsx("p", {
        children: "That’s why the Gospel is rightly translated the “Good News”, and why I encourage you that no matter how bad you think it is right now, to believe in a God who has demonstrated time and time again, that His mercy to welcome us into fellowship – despite our shortcomings - is greater than our anything we could ever fathom or hope for."
      })]
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ACommentaryOnMercyPage
}, Symbol.toStringTag, { value: "Module" }));
const TermsPage = UNSAFE_withComponentProps(function TermsPage2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "text-page-container",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Terms & Conditions"
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("p", {
        children: 'The following terms of use agreement sets out your rights and obligations in respect of your use of the BlackSheep website and certain access controlled portions of the website and/or app, the "members-only area".'
      }), /* @__PURE__ */ jsx("p", {
        children: "Acceptance"
      }), /* @__PURE__ */ jsx("p", {
        children: 'It is important that you read the following terms and conditions carefully. This terms of use agreement ("Agreement") is a legal agreement between you and BlackSheep, the owner and operator of this website and/or app, including, without limitation, the members-only area (the "Website" and/or “App”). It states the terms and conditions under which you may access and use the Website and/or App and all written and other materials displayed or made available through the Website and/or App, including, without limitation, text, and software (collectively, the "Content"). By accessing and using the Website and/or App, you are indicating your acceptance to be bound by the terms and conditions of this Agreement.'
      }), /* @__PURE__ */ jsx("p", {
        children: "If you do not accept these terms and conditions, you must not access or use the Website and/or App. BlackSheep may revise this Agreement at any time by updating this posting. Use of the Website and/or App after such changes are posted will signify your acceptance of these revised terms. You should visit this page periodically to review this Agreement."
      }), /* @__PURE__ */ jsx("p", {
        children: 'You agree that electronic pages of the Website and/or App are the equivalent of written documents and that your signifying agreement or acknowledgement by "clicking" any buttons, stating "agree", (or its equivalent) or by typing "agree" (or its equivalent) where prompted by the Website and/or App shall have the same legal effect as if you had placed your signature by hand and provided hard-copy versions of such pages to BlackSheep with the intention to be legally bound.'
      }), /* @__PURE__ */ jsx("p", {
        children: "Use of the Website and/or App Note: The usage of the terms ‘Website and/or App’ include community connections made through the Website and/or App."
      }), /* @__PURE__ */ jsx("p", {
        children: "Subject to your acceptance to be bound by any additional or other terms and conditions applicable to all or part of the BlackSheep website and/or App, BlackSheep authorizes you to access and use the Website and/or App for your personal non-commercial use in Canada in accordance with the terms and conditions of this Agreement. The information on the Website and/or App is for informational purposes only; it is not intended as an interactive forum and it is not professional legal or medico-legal advice nor is it intended to be a substitute therefore. You should not use any information contained on the Website and/or App as a substitute for consultation with legal professionals or other professional advisors. You should not act or abstain from acting based upon information obtained from the Website and/or App without first consulting appropriate professional advisors."
      }), /* @__PURE__ */ jsx("p", {
        children: 'The Website and/or App contains learning resources of a general nature that are presented for educational purposes for use by healthcare professionals. The information contained within such learning materials is for informational purposes only; it is not professional legal or medico-legal advice, nor is it intended to be a substitute therefore. Ideas and approaches contained within such learning materials DO NOT represent "the standard of care" for Canadian healthcare professionals. Standards of medical care are specific to the facts and circumstances of an individual case, and may be subject to change as scientific knowledge and technology advance and as practice patterns evolve.'
      }), /* @__PURE__ */ jsx("p", {
        children: "Membership"
      }), /* @__PURE__ */ jsx("p", {
        children: "If you are a BlackSheep member (“Member”), you will create a username to create a password that will give you access to the members-only area. Your username and password are for your personal use only. You are responsible for maintaining the confidentiality of your username and password and are responsible for all activities that occur under your username and password. In the event that you forget your password, a password reset will be issued upon request. An automatic email will be sent to the primary email address stored on file."
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep is under no obligation to confirm the actual identity or authority of any party accessing or using the Website and/or App using the members-only area under your username and password. You agree to notify BlackSheep immediately of any unauthorized use of your username or password or any other breach of security. BlackSheep will not be liable for any loss or damage arising from your failure to protect your username or your password."
      }), /* @__PURE__ */ jsx("p", {
        children: "First-time users will be asked to create a new password right away. You agree that you will comply with the password selection guidelines as may be issued from time to time by the BlackSheep and that you shall change your password as prompted by the Website and/or App to reduce the potential for unauthorized use."
      }), /* @__PURE__ */ jsx("p", {
        children: "Users who forget their password can reset it through the “Click here to Reset Password” link on the sign-in page. They will be prompted to enter their email on file and will receive a password reset link via email. "
      }), /* @__PURE__ */ jsx("p", {
        children: "Alternatively, they can email contact.us.blacksheep@gmail.com and request a password reset from the system administrators."
      }), /* @__PURE__ */ jsx("p", {
        children: "You agree that, by accessing the members-only area using your username and password, BlackSheep may use your username and password as the means to authenticate your identity for the purposes of using the members-only area."
      }), /* @__PURE__ */ jsx("p", {
        children: "Members-only area (Member sign-in)"
      }), /* @__PURE__ */ jsx("p", {
        children: "If you are a Member, BlackSheep authorizes you to access and use the members-only (member sign-in) area in relation to connecting with community in accordance with the terms and conditions of this Agreement. Subject to the terms and conditions of this Agreement, you are hereby granted a personal limited, non-transferable and non-exclusive license to access, view and use the members-only area and the community connection. You must also abide by any additional requirements governing privacy of personal information surrounding the use of any connections that are made in the members-only area."
      }), /* @__PURE__ */ jsx("p", {
        children: "This information contained in the members-only area is provided for the purposes of supporting greater community connection. It is not intended to be a substitute for direct consultation with the BlackSheep, legal professionals or other professional advisors with regard to specific spiritual or medical issues."
      }), /* @__PURE__ */ jsx("p", {
        children: "Communications (Messenger)"
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep has provided a secure messaging service for Members seeking to communicate with community leaders. You agree that you will contact the community members to obtain advice only by using the secure messaging service available from within the members-only area. BlackSheep mentors may not respond to unencrypted e-mail from Members seeking advice or assistance. BlackSheep cannot guarantee the confidentiality of such unencrypted e-mail transmissions."
      }), /* @__PURE__ */ jsx("p", {
        children: "No special relationship or obligation will result from the transmission of e-mail or electronic messaging generated outside the members-only area from Members to the BlackSheep for the purpose of seeking advice or assistance. Such communications will not be responded to and will be discarded unread."
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep has made reasonable efforts to ensure the security of communication between you and BlackSheep App using the secure messaging service. However, as with any electronic communication, BlackSheep cannot and does not represent, warrant or covenant that communications to or from the members-only area using the secure messaging service will under all circumstances be secure, not intercepted or subject to delay, data corruption or unauthorized access by current or future means."
      }), /* @__PURE__ */ jsx("p", {
        children: "If you wish to transmit sensitive information, documents or other materials through the BlackSheep App electronically, this should be done via the secure messaging service, and solely at your own risk. This service allows you to transmit such materials to the BlackSheep members for the purposes of communicating questions or seeking advise. You agree that you will not upload or transfer any files, documents or materials: (i) which are unlawful, abusive, defamatory or obscene including without limitation any such material constituting or encouraging conduct that would constitute a criminal offence, create civil liability or otherwise violate any local provincial, national or international law or regulation, or (ii) which knowingly contains a virus or other harmful component(s)."
      }), /* @__PURE__ */ jsx("p", {
        children: "You also agree that copies of all communication between you and community members using BlackSheep’s secure messaging service and copies of the files, documents and other materials that you forward using the BlackSheep App through the members-only area of the BlackSheep Website and/or App become the property of BlackSheep."
      }), /* @__PURE__ */ jsx("p", {
        children: "Limitation of liability"
      }), /* @__PURE__ */ jsx("p", {
        children: "WHILE BLACKSHEEP ENDEAVORS TO PROVIDE ACCURATE AND CURRENT INFORMATION AS WELL AS SAFE COMMUNITY CONNECTIONS ON ITS WEBSITE AND/OR APP, IN NO EVENT SHALL BLACKSHEEP, ITS STAFF, COMMUNITY MEMBERS, VOLUNTEERS, AGENTS, LICENSORS, SUPPLIERS AND THEIR RESPECTIVE SUCCESSORS AND ASSIGNS BE LIABLE FOR ANY LOSSES, EXPENSES, DAMAGES OR ANY OTHER AMOUNTS OF ANY KIND, INCLUDING, WITHOUT LIMITATION, ANY DIRECT, SPECIAL, INDIRECT, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES WHETHER OR NOT INCURRED IN CONNECTION WITH YOUR USE, MISUSE OR RELIANCE UPON THE WEBSITE AND/OR APP OR CONTENT, OR YOUR INABILITY TO USE THE WEBSITE AND/OR APP, REGARDLESS OF THE CAUSE AND WHETHER ARISING IN CONTRACT (INCLUDING FUNDAMENTAL BREACH), TORT (INCLUDING NEGLIGENCE), OR OTHERWISE. THE FOREGOING LIMITATION SHALL APPLY EVEN IF BLACKSHEEP KNEW OF OR OUGHT TO HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES."
      }), /* @__PURE__ */ jsx("p", {
        children: "YOU ACKNOWLEDGE AND AGREE THAT YOUR ACCESS TO AND USE OF THE WEBSITE AND THE CONTENT IS ENTIRELY AT YOUR OWN RISK AND LIABILITY."
      }), /* @__PURE__ */ jsx("p", {
        children: "Modification to the Website"
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Website and/or App (or any part thereof) with or without written notice. You agree that BlackSheep shall not be liable to you or any third party for any modifications, suspension or discontinuance of the Website or any part thereof."
      }), /* @__PURE__ */ jsx("p", {
        children: "Downtime"
      }), /* @__PURE__ */ jsx("p", {
        children: "You acknowledge that the Website and/or App and any part thereof may be periodically unavailable in order to allow for maintenance."
      }), /* @__PURE__ */ jsx("p", {
        children: "Unauthorized use"
      }), /* @__PURE__ */ jsx("p", {
        children: "Unauthorized attempts to defeat or circumvent security features, to use the BlackSheep App or system for other than intended purposes, to deny service to authorized users, to access, obtain, alter, damage, or destroy information, or otherwise to interfere with the system or its operation are not permitted. Evidence of such acts may also be disclosed to law enforcement authorities and result in criminal prosecution under the laws of Canada or such other jurisdictions as may apply."
      }), /* @__PURE__ */ jsx("p", {
        children: "Waiver"
      }), /* @__PURE__ */ jsx("p", {
        children: "Any consent by BlackSheep to, or waiver of, a breach of this Agreement which you have committed, whether express or implied, shall not constitute a consent to, or waiver of, any other, different or subsequent breach."
      }), /* @__PURE__ */ jsx("p", {
        children: "Severability"
      }), /* @__PURE__ */ jsx("p", {
        children: "The invalidity or unenforceability of any provision of this Agreement or any covenant contained herein shall not affect the validity or enforceability of any other provision or covenant contained herein and any such invalid provision or covenant shall be deemed severable from the rest of this Agreement."
      }), /* @__PURE__ */ jsx("p", {
        children: "Termination"
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep may, in its sole discretion, terminate or suspend your right to use the Website and or App, or any part of the Website and/or App, at any time without notice. In the event of such termination, or suspension, you are no longer authorized to access, view or use the Website and/or App, or the part of the Website and/or App affected by such termination or suspension. The restrictions imposed on you with respect to material downloaded from the Website and/or App, the disclaimers and the limitation of liability set forth in this Agreement, shall survive termination or suspension of this Agreement for any cause. BlackSheep shall not be liable to you or any other party for such termination or suspension."
      }), /* @__PURE__ */ jsx("p", {
        children: "Privacy"
      }), /* @__PURE__ */ jsx("p", {
        children: "We understand the importance of privacy and the protection of personal information. Read the entire BlackSheep Privacy Policy to learn how we collect, use, and disclose personal information."
      }), /* @__PURE__ */ jsx("p", {
        children: "Governing law and jurisdiction"
      }), /* @__PURE__ */ jsx("p", {
        children: "The Website is operated by BlackSheep Administrators within the province of Ontario, Canada. You agree that all matters relating to your access, or use of the Website and/or App and its Content shall be governed by the laws of the province of Ontario and the laws of Canada applicable therein, without regard to conflict of laws principles. You agree and hereby submit to the exclusive and preferential jurisdiction of the courts of the province of Ontario with respect to all matters relating to your access and use of the Website and the Content as well as any dispute that may arise therefrom."
      }), /* @__PURE__ */ jsx("p", {
        children: "Notice"
      }), /* @__PURE__ */ jsx("p", {
        children: "If you have general questions or comments regarding the BlackSheep Website and/or App contact us:"
      }), /* @__PURE__ */ jsx("p", {
        children: "By email"
      }), /* @__PURE__ */ jsx("p", {
        children: "contact.us.blacksheep@gmail.com"
      })]
    })]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TermsPage
}, Symbol.toStringTag, { value: "Module" }));
const PrivacyPage = UNSAFE_withComponentProps(function PrivacyPage2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "text-page-container",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "BlackSheep Privacy Policy"
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("p", {
        children: "Last Updated: August 2025."
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep has updated its Privacy Policy including in relation to withdrawal of consent, use of cookies, and process relating to privacy impact assessments."
      }), /* @__PURE__ */ jsx("p", {
        children: "In accordance with Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA), BlackSheep has put policies and practices in place to safeguard your privacy. The privacy of your personal information is important to our organization. We are committed to collecting, using, and disclosing your personal information responsibly. We will be as open and transparent as possible about the way we use your personal information. All staff and volunteers who come in contact with your information are aware of the sensitive nature of your personal information. They are trained in the appropriate uses and protection of your information."
      }), /* @__PURE__ */ jsx("p", {
        children: "Overview"
      }), /* @__PURE__ */ jsx("p", {
        children: "This privacy policy governs the BlackSheep’s collection, use, and disclosure of personal information and spiritual information (together, “personal information”)."
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep collects, uses, and discloses personal information for reasons that are consistent with the purposes described in this policy (see section below, entitled “Why does the BlackSheep collect Personal Information?), or as otherwise permitted or mandated by law. There may be circumstances where you have provided personal information for one purpose, and we later need to use that information for a different purpose. In such circumstances, we will seek your consent to use the information for the new purpose unless the law permits or requires us to use the information for that new purpose."
      }), /* @__PURE__ */ jsx("p", {
        children: "Personal information is kept securely by BlackSheep and its service providers. It is retained only as long as necessary to fulfil the stated purposes. Except in limited circumstances, you have the right to access the information collected about you, within a reasonable time frame, in accordance with existing legislation."
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep will regularly revise its privacy practices and this privacy policy. Policy changes will apply to the information collected from the date of the revised privacy policy, as well as to existing information held by BlackSheep at the time of the amendment. Updates to this privacy policy will be published on our website. Members will be reminded of our privacy policy and any updates. Should you have any questions or concerns, you are invited to contact BlackSheep’s Privacy Office at contact.us.blacksheep@gmail.com"
      }), /* @__PURE__ */ jsx("p", {
        children: "When you provide personal information, you agree that the BlackSheep may collect, use, and disclose your personal information in accordance with this privacy policy. BlackSheep does not sell, trade, barter, exchange, or disclose for consideration any personal information. You are free to withdraw your consent at any time. However, if you choose not to provide us with consent to collect, use, or disclose personal information, we may not be able to offer some of the services requested."
      }), /* @__PURE__ */ jsx("p", {
        children: "What personal information does the BlackSheep collect?"
      }), /* @__PURE__ */ jsx("p", {
        children: "Personal information is any information, whether recorded or not, about an identifiable member, or a member whose identity may be inferred or determined from the information. Examples of personal information include age, name, email, phone numbers, or comments."
      }), /* @__PURE__ */ jsx("p", {
        children: "Personal information also includes spiritual information about an identifiable member such as:"
      }), /* @__PURE__ */ jsx("p", {
        children: "- Physical, spiritual or mental health;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- any spiritual service provided to the member;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- information that is collected in the course of providing spiritual support to the member; or"
      }), /* @__PURE__ */ jsx("p", {
        children: "- information that is collected incidentally to the provision of Mentors about the Mentee and any feedback resulting from that collection."
      }), /* @__PURE__ */ jsx("p", {
        children: "Personal information collected by the BlackSheep"
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep collects the following personal information. The table below describes the categories of personal information collected, the specific types of personal information collected, as well as the source of collection. BlackSheep aims to be as complete and transparent about its collection practices as possible. It may be, however, that certain types of personal information are collected, but not listed here."
      }), /* @__PURE__ */ jsxs("table", {
        children: [/* @__PURE__ */ jsxs("thead", {
          children: [/* @__PURE__ */ jsx("th", {
            children: "Category"
          }), /* @__PURE__ */ jsx("th", {
            children: "Description"
          }), /* @__PURE__ */ jsx("th", {
            children: "Source of Information"
          })]
        }), /* @__PURE__ */ jsxs("tbody", {
          children: [/* @__PURE__ */ jsxs("tr", {
            children: [/* @__PURE__ */ jsx("td", {
              children: "Profile Data"
            }), /* @__PURE__ */ jsx("td", {
              children: "First name, surname, date of birth, email address, username, and password for user the user login, telephone number, and email address contained in the BlackSheep user application."
            }), /* @__PURE__ */ jsx("td", {
              children: "You"
            })]
          }), /* @__PURE__ */ jsxs("tr", {
            children: [/* @__PURE__ */ jsx("td", {
              children: "Equity, Diversity and Inclusion Data (optional)"
            }), /* @__PURE__ */ jsx("td", {
              children: "Equity, diversity and inclusion (EDI) data contained in the BlackSheep registration application, including age and gender."
            }), /* @__PURE__ */ jsx("td", {
              children: "You (optional)"
            })]
          }), /* @__PURE__ */ jsxs("tr", {
            children: [/* @__PURE__ */ jsx("td", {
              children: "Browsing Data"
            }), /* @__PURE__ */ jsx("td", {
              children: "Webpages you visited, internet browser, access dates and times, which features you used, duration of visit, crashes and other system activity, and third-party sites you were interacting with before visiting our site."
            }), /* @__PURE__ */ jsx("td", {
              children: "Third party sources"
            })]
          }), /* @__PURE__ */ jsxs("tr", {
            children: [/* @__PURE__ */ jsx("td", {
              children: "Technical Data"
            }), /* @__PURE__ */ jsx("td", {
              children: "Your Internet Protocol (IP) address, Device ID or MAC address, information about the manufacturer, model, settings, and operating system of your mobile device, and application version."
            }), /* @__PURE__ */ jsx("td", {
              children: "Third party sources"
            })]
          }), /* @__PURE__ */ jsxs("tr", {
            children: [/* @__PURE__ */ jsx("td", {
              children: "Communications"
            }), /* @__PURE__ */ jsx("td", {
              children: "We collect your consent to receive communications using BlackSheep’s messaging services as well as to share your contact information with local Mentors for the purpose of providing you with community support."
            }), /* @__PURE__ */ jsx("td", {
              children: "You"
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "Why does BlackSheep collect my data?"
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep collects personal information to fulfill its mandate. This includes:"
      }), /* @__PURE__ */ jsx("p", {
        children: "- processing applications and confirming eligibility for BlackSheep membership;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- utilizing services for community connection; mentorship via messenger or in-person meetings"
      }), /* @__PURE__ */ jsx("p", {
        children: "- responding to requests for assistance from members;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- delivering assistance to members in their connection to community groups;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- inviting members to BlackSheep events;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- developing and delivering support related solutions and risk analytics;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- identifying areas where we can offer our services differently to enhance equity, inclusion and diversity, and developing our understanding of EDI issues facing our members to inform our member services and prepare for advocacy efforts;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- communicating with members, including for direct marketing purposes;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- providing marketing and other information about the services offered by BlackSheep, as well as other service providers;"
      }), /* @__PURE__ */ jsx("p", {
        children: "- responding to inquiries received from Mentors regarding Mentees who are members of BlackSheep; and"
      }), /* @__PURE__ */ jsx("p", {
        children: "- meeting legal or regulatory requirements."
      }), /* @__PURE__ */ jsx("p", {
        children: "BlackSheep’s collection, use, and disclosure of personal information is limited to these purposes or is consistent with them, as permitted by law. BlackSheep generally collects personal information directly from the individual, but may also collect information indirectly on behalf of BlackSheep members with consent, or where otherwise permitted or required by law."
      }), /* @__PURE__ */ jsxs("p", {
        children: [/* @__PURE__ */ jsx("b", {
          children: "In short"
        }), ", BlackSheep collects your personal information to fulfill its mandate. For example, we may collect personal information to manage your membership, provide you with community based support, or meet legal or regulatory requirements, among others. We only collect personal information for one of the reasons listed in this policy, for purposes consistent with them or as otherwise permitted by law."]
      })]
    })]
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PrivacyPage
}, Symbol.toStringTag, { value: "Module" }));
function LandingPage() {
  return /* @__PURE__ */ jsxs("main", { id: "landing-page-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "intro-container", children: [
      /* @__PURE__ */ jsxs("h1", { children: [
        "We all need supportive community.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "If you live in the Mississauga area, get connected today!"
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/learn-more", className: "emphasis", children: "LEARN MORE" })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "videos-section-container", className: "section-container", children: [
      /* @__PURE__ */ jsx("div", { id: "videos-section-container-top-ellipse", className: "ellipse" }),
      /* @__PURE__ */ jsxs("div", { id: "videos-items-container", children: [
        /* @__PURE__ */ jsx("div", { className: "video", children: /* @__PURE__ */ jsx("video", { loop: true, autoPlay: true, muted: true, children: /* @__PURE__ */ jsx("source", { src: "/public/assets/videos/video1.mp4", type: "video/mp4" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "video", children: /* @__PURE__ */ jsx("video", { loop: true, autoPlay: true, muted: true, children: /* @__PURE__ */ jsx("source", { src: "/public/assets/videos/video2.mp4", type: "video/mp4" }) }) })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "COMING SOON" }),
      /* @__PURE__ */ jsx("div", { id: "videos-section-container-bottom-ellipse", className: "ellipse" })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "blog-section-container", className: "section-container", children: [
      /* @__PURE__ */ jsx("h2", { children: "WHY DOES COMMUNITY MATTER?" }),
      /* @__PURE__ */ jsx("p", { children: "Increase your knowledge on the benefits of spirtiual commnity by following our monthly blog." }),
      /* @__PURE__ */ jsxs("div", { id: "blog-items-container", children: [
        /* @__PURE__ */ jsx("div", { className: "blog-item", children: /* @__PURE__ */ jsxs(Link, { to: "/blogs/plurality", children: [
          /* @__PURE__ */ jsx("img", { src: "/public/assets/images/plurality_in_biblical_oneness.png", alt: "mercy" }),
          /* @__PURE__ */ jsx("h3", { children: "PLURALITY IN BIBLICAL ONENESS" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "blog-item", children: /* @__PURE__ */ jsxs(Link, { to: "/blogs/storytelling", children: [
          /* @__PURE__ */ jsx("img", { src: "/public/assets/images/the_art_of_storytelling2.png", alt: "oneness" }),
          /* @__PURE__ */ jsx("h3", { children: "THE ART OF STORYTELLING" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "blog-item", children: /* @__PURE__ */ jsxs(Link, { to: "/blogs/mercy", children: [
          /* @__PURE__ */ jsx("img", { src: "/public/assets/images/commentary_on_mercy.jpg", alt: "art" }),
          /* @__PURE__ */ jsx("h3", { children: "A COMMENTARY ON MERCY" })
        ] }) })
      ] })
    ] })
  ] });
}
function meta({}) {
  return [{
    title: "Blacksheep"
  }, {
    name: "description",
    content: "Blacksheep connects people seeking guidance with their lives to people who can help them."
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(LandingPage, {});
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DRMOEdeD.js", "imports": ["/assets/chunk-ZYFC6VSF-DyRubkOq.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-C9PmG_L-.js", "imports": ["/assets/chunk-ZYFC6VSF-DyRubkOq.js"], "css": ["/assets/root-D4bzTY32.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/LearnMorePage": { "id": "pages/LearnMorePage", "parentId": "root", "path": "/learn-more", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/LearnMorePage-zHTTgoYd.js", "imports": ["/assets/chunk-ZYFC6VSF-DyRubkOq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/blogs/PluralityInBiblicalOnenessPage": { "id": "pages/blogs/PluralityInBiblicalOnenessPage", "parentId": "root", "path": "/blogs/plurality", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/PluralityInBiblicalOnenessPage-BfO0BXTG.js", "imports": ["/assets/chunk-ZYFC6VSF-DyRubkOq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/blogs/ArtOfStoryTellingPage": { "id": "pages/blogs/ArtOfStoryTellingPage", "parentId": "root", "path": "/blogs/storytelling", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/ArtOfStoryTellingPage-Cw2a8TSR.js", "imports": ["/assets/chunk-ZYFC6VSF-DyRubkOq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/blogs/ACommentaryOnMercyPage": { "id": "pages/blogs/ACommentaryOnMercyPage", "parentId": "root", "path": "/blogs/mercy", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/ACommentaryOnMercyPage-DYEnngHc.js", "imports": ["/assets/chunk-ZYFC6VSF-DyRubkOq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/legal/TermsPage": { "id": "pages/legal/TermsPage", "parentId": "root", "path": "/terms", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/TermsPage-Cy4lyiJ-.js", "imports": ["/assets/chunk-ZYFC6VSF-DyRubkOq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/legal/PrivacyPage": { "id": "pages/legal/PrivacyPage", "parentId": "root", "path": "/privacy", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/PrivacyPage-DeyjiC3C.js", "imports": ["/assets/chunk-ZYFC6VSF-DyRubkOq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-DJQQg-CD.js", "imports": ["/assets/chunk-ZYFC6VSF-DyRubkOq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-3c17a775.js", "version": "3c17a775", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "pages/LearnMorePage": {
    id: "pages/LearnMorePage",
    parentId: "root",
    path: "/learn-more",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "pages/blogs/PluralityInBiblicalOnenessPage": {
    id: "pages/blogs/PluralityInBiblicalOnenessPage",
    parentId: "root",
    path: "/blogs/plurality",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "pages/blogs/ArtOfStoryTellingPage": {
    id: "pages/blogs/ArtOfStoryTellingPage",
    parentId: "root",
    path: "/blogs/storytelling",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "pages/blogs/ACommentaryOnMercyPage": {
    id: "pages/blogs/ACommentaryOnMercyPage",
    parentId: "root",
    path: "/blogs/mercy",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "pages/legal/TermsPage": {
    id: "pages/legal/TermsPage",
    parentId: "root",
    path: "/terms",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "pages/legal/PrivacyPage": {
    id: "pages/legal/PrivacyPage",
    parentId: "root",
    path: "/privacy",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route7
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
