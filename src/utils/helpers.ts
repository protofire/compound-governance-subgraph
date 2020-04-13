import { User, Proposal, Governance, Vote } from "../../generated/schema";
import { Address, EthereumEvent, BigInt, Bytes, log } from "@graphprotocol/graph-ts";
import { DEFAULT_DECIMALS, toDecimal } from "./decimals";
import {
  ZERO_ADDRESS,
  BIGINT_ZERO,
  BIGINT_ONE,
  BIGDECIMAL_ZERO
} from "./constants";

export function getOrCreateUser(
  id: String,
  createIfNotFound: boolean = true,
  save: boolean = true
): User {
  let user = User.load(id);

  if (user == null && createIfNotFound) {
    user = new User(id);

    let governance = getGovernanceEntity();

    governance.users = governance.users + BIGINT_ONE;
    governance.save();

    if (save) {
      user.save();
    }
  }

  return user as User;
}

export function getOrCreateVote(
  id: String,
  createIfNotFound: boolean = true,
  save: boolean = false
): Vote {
  let vote = Vote.load(id);

  if (vote == null && createIfNotFound) {
    vote = new Vote(id);

    if (save) {
      vote.save();
    }
  }

  return vote as Vote;
}

export function getOrCreateProposal(
  id: String,
  createIfNotFound: boolean = true,
  save: boolean = false
): Proposal {
  let proposal = Proposal.load(id);

  if (proposal == null && createIfNotFound) {
    proposal = new Proposal(id);

    let governance = getGovernanceEntity();

    governance.proposals = governance.proposals + BIGINT_ONE;
    governance.save();

    if (save) {
      proposal.save();
    }
  }

  return proposal as Proposal;
}

export function getGovernanceEntity(): Governance {
  let governance = Governance.load("GOVERNANCE");

  if (governance == null) {
    governance = new Governance("GOVERNANCE");
    governance.proposals = BIGINT_ZERO;
    governance.users = BIGINT_ZERO;
    governance.proposalsQueued = BIGINT_ZERO;
  }

  return governance as Governance;
}

export function getEventId(event: EthereumEvent): String {
  return event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(event.logIndex.toString());
}
